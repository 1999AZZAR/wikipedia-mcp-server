import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { JSONRPCServer } from './jsonrpc';
import { EnhancedWikipediaService } from './wikipediaService';
import { WikipediaExtendedFeatures } from './additionalFeatures';
import { MonitoringService } from './monitoring';
import { z } from 'zod';
import LRUCache from 'lru-cache';
import { createWikipediaMcp } from './mcp';
import { isJSONRPCResponse, isJSONRPCError } from '@modelcontextprotocol/sdk/types';

// Environment bindings interface
interface EnvBindings {
  [key: string]: any;
  WIKI_CACHE?: KVNamespace;
  CACHE_MAX?: string;
  CACHE_TTL?: string;
  DEFAULT_LANGUAGE?: string;
  ENABLE_DEDUPLICATION?: string;
}

// Global instances
let lruCache: LRUCache<string, any> | null = null;
let wikipediaService: EnhancedWikipediaService | null = null;
let extendedFeatures: WikipediaExtendedFeatures | null = null;
let monitoring: MonitoringService | null = null;
let mcp: any = null;

const DEFAULT_CACHE_MAX = 100;
const DEFAULT_CACHE_TTL = 5 * 60 * 1000;

// Service initializer
function initializeServices(env: EnvBindings) {
  if (!lruCache) {
    const max = parseInt(env.CACHE_MAX || '', 10) || DEFAULT_CACHE_MAX;
    const ttl = parseInt(env.CACHE_TTL || '', 10) || DEFAULT_CACHE_TTL;
    lruCache = new LRUCache<string, any>({ max, ttl });
  }

  if (!monitoring) {
    monitoring = new MonitoringService();
  }

  if (!wikipediaService) {
    wikipediaService = new EnhancedWikipediaService({
      cache: lruCache,
      kvCache: env.WIKI_CACHE,
      enableDeduplication: env.ENABLE_DEDUPLICATION === 'true',
      defaultLanguage: env.DEFAULT_LANGUAGE || 'en',
    });
  }

  if (!extendedFeatures) {
    extendedFeatures = new WikipediaExtendedFeatures(wikipediaService);
  }

  if (!mcp) {
    mcp = createWikipediaMcp(wikipediaService, extendedFeatures);
  }

  return { wikipediaService, extendedFeatures, monitoring, mcp };
}

const app = new Hono<{ Bindings: EnvBindings }>();

// Middleware
app.use('*', logger());
app.use('*', cors());

// MCP Handler
app.all('/mcp', async (c) => {
    const { mcp } = initializeServices(c.env);

    let rpcResponse: any = null;

    const fakeTransport = {
        onmessage: (message: any) => {},
        onclose: () => {},
        onerror: (error: Error) => {},
        start: async () => {},
        close: async () => {},
        send: async (message: any) => {
            if (isJSONRPCResponse(message) || isJSONRPCError(message)) {
                rpcResponse = message;
            }
        },
    };

    await mcp.server.connect(fakeTransport);

    const requestBody = await c.req.json();
    if (fakeTransport.onmessage) {
        fakeTransport.onmessage(requestBody);
    }

    const responsePromise = new Promise<any>((resolve) => {
        const interval = setInterval(() => {
            if (rpcResponse) {
                clearInterval(interval);
                resolve(rpcResponse);
            }
        }, 10);
    });

    const mcpResponse = await responsePromise;

    return c.json(mcpResponse);
});


// Legacy JSON-RPC API for backward compatibility
app.post('/api', async (c) => {
  const services = initializeServices(c.env);
  const request = await c.req.json();

  const fakeJsonRpcTransport = {
    start: async () => {},
    close: async () => {},
    onmessage: (message: any) => {},
    onclose: () => {},
    onerror: (error: Error) => { console.error(error); },
    send: async (message: any) => {
        return c.json(message);
    }
  };

  const jsonRpcServer = new JSONRPCServer(fakeJsonRpcTransport);

  // Schemas for validation
  const searchSchema = z.object({
    query: z.string().min(1),
    limit: z.number().int().positive().max(50).optional().default(10),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
    offset: z.number().int().nonnegative().optional().default(0),
    includeSnippets: z.boolean().optional().default(true),
  });

  jsonRpcServer.on('wikipedia.search', async (params: unknown) => {
    const parseResult = searchSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.search: ${parseResult.error.message}`);
    }
    const { query, limit, lang, offset, includeSnippets } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: 'wikipedia.search',
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    const data = await services.wikipediaService.search(query, { limit, lang, offset, includeSnippets });
    return data?.query?.search || [];
  });

  const pageSchema = z.object({
    title: z.string().min(1),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
    sections: z.boolean().optional().default(true),
    images: z.boolean().optional().default(false),
    links: z.boolean().optional().default(false),
    categories: z.boolean().optional().default(false),
  });

  jsonRpcServer.on('wikipedia.page', async (params: unknown) => {
    const parseResult = pageSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.page: ${parseResult.error.message}`);
    }
    const { title, lang, sections, images, links, categories } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: 'wikipedia.page',
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    const data = await services.wikipediaService.getPage(title, { lang, sections, images, links, categories });
    return data?.parse || null;
  });

  const pageByIdSchema = z.object({
    id: z.number().int().positive(),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
    sections: z.boolean().optional().default(true),
    images: z.boolean().optional().default(false),
    links: z.boolean().optional().default(false),
    categories: z.boolean().optional().default(false),
  });

  jsonRpcServer.on('wikipedia.pageById', async (params: unknown) => {
    const parseResult = pageByIdSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.pageById: ${parseResult.error.message}`);
    }
    const { id, lang, sections, images, links, categories } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: 'wikipedia.pageById',
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    const data = await services.wikipediaService.getPageById(id, { lang, sections, images, links, categories });
    return data?.parse || null;
  });

  // New enhanced methods
  const summarySchema = z.object({
    title: z.string().min(1),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
  });

  jsonRpcServer.on('wikipedia.summary', async (params: unknown) => {
    const parseResult = summarySchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.summary: ${parseResult.error.message}`);
    }
    const { title, lang } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: 'wikipedia.summary',
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    return await services.wikipediaService.getPageSummary(title, lang);
  });

  const randomSchema = z.object({
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
  });

  jsonRpcServer.on('wikipedia.random', async (params: unknown) => {
    const parseResult = randomSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.random: ${parseResult.error.message}`);
    }
    const { lang } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: 'wikipedia.random',
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    return await services.wikipediaService.getRandomPage(lang);
  });

    const pageLanguagesSchema = z.object({
    title: z.string().min(1),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
  });

  jsonRpcServer.on('wikipedia.pageLanguages', async (params: unknown) => {
    const parseResult = pageLanguagesSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.pageLanguages: ${parseResult.error.message}`);
    }
    const { title, lang } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: 'wikipedia.pageLanguages',
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    return await services.extendedFeatures.getPageLanguages(title, lang);
  });


  return await jsonRpcServer.processRequest(request);
});

app.get('/', (c) => c.text('Wikipedia Service is running.'));

app.get('/health', async (c) => {
    const services = initializeServices(c.env);
    const healthStatus = await services.wikipediaService.healthCheck();
    const metrics = services.monitoring.getDashboardData();
    return c.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: healthStatus,
        monitoring: metrics
    });
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ error: err.message }, 500);
});

export default app; 