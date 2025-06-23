import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { JSONRPCServer } from './jsonrpc';
import { WorkerTransport } from './WorkerTransport';
import { EnhancedWikipediaService } from './wikipediaService';
import { WikipediaExtendedFeatures } from './additionalFeatures';
import { MonitoringService } from './monitoring';
import { z } from 'zod'; // For input validation
import LRUCache from 'lru-cache';

// Enhanced environment bindings
interface EnvBindings {
  [key: string]: any;
  
  // Configuration
  CACHE_MAX?: string;
  CACHE_TTL?: string;
  DEFAULT_LANGUAGE?: string;
  ENABLE_DEDUPLICATION?: string;
  LOG_LEVEL?: string;
  ENABLE_METRICS?: string;
  
  // Storage
  WIKI_CACHE?: KVNamespace; // Cloudflare KV for persistent caching
}

const app = new Hono<{ Bindings: EnvBindings }>();

// Global instances
let lruCache: LRUCache<string, any> | null = null;
let wikipediaService: EnhancedWikipediaService | null = null;
let extendedFeatures: WikipediaExtendedFeatures | null = null;
let monitoring: MonitoringService | null = null;

// Default cache configuration
const DEFAULT_CACHE_MAX = 100;
const DEFAULT_CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

app.use('*', logger());

// Initialize services
function initializeServices(env: EnvBindings): {
  wikipediaService: EnhancedWikipediaService;
  extendedFeatures: WikipediaExtendedFeatures;
  monitoring: MonitoringService;
} {
  if (!lruCache) {
    const max = parseInt(env.CACHE_MAX || '', 10) || DEFAULT_CACHE_MAX;
    const ttl = parseInt(env.CACHE_TTL || '', 10) || DEFAULT_CACHE_TTL;
    console.log(`Initializing LRU Cache with max: ${max}, ttl: ${ttl}ms`);
    lruCache = new LRUCache<string, any>({ max, ttl });
  }

  if (!monitoring) {
    monitoring = new MonitoringService();
  }

  if (!wikipediaService) {
    wikipediaService = new EnhancedWikipediaService({
      cache: lruCache,
      kvCache: env.WIKI_CACHE || undefined,
      enableDeduplication: env.ENABLE_DEDUPLICATION === 'true',
      defaultLanguage: env.DEFAULT_LANGUAGE || 'en'
    });
  }

  if (!extendedFeatures) {
    extendedFeatures = new WikipediaExtendedFeatures(wikipediaService);
  }

  return { wikipediaService, extendedFeatures, monitoring };
}

// MCP endpoint
app.post('/mcp', async (c) => {
  let requestBody: any;
  try {
    requestBody = await c.req.json();
  } catch (e) {
    // Handle cases where the request body isn't valid JSON
    return c.json({ 
      jsonrpc: '2.0', 
      error: { code: -32700, message: 'Parse error: Invalid JSON' },
      id: null 
    }, 400); // Use 400 for invalid JSON payload
  }

  const services = initializeServices(c.env || {});

  try {
    const transport = new WorkerTransport(c); 
    const jsonRpcServer = new JSONRPCServer(transport);

    // --- Register Enhanced MCP Methods ---
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
    // --- End Method Registration ---

    // Process the request using the JSON-RPC server and directly return its Response
    return await jsonRpcServer.processRequest(requestBody);

  } catch (error: any) {
    // Catch errors during server setup or unexpected errors during processRequest
    console.error('Error processing MCP request in worker:', error);
    const requestId = (typeof requestBody === 'object' && requestBody !== null && typeof requestBody.id !== 'undefined') ? requestBody.id : null;
    return c.json({ 
      jsonrpc: '2.0', 
      error: { code: -32603, message: `Internal server error: ${error.message}` },
      id: requestId
    }, 500);
  }
});

// Enhanced health check route
app.get('/health', async (c) => {
  try {
    const services = initializeServices(c.env || {});
    const healthStatus = await services.wikipediaService.healthCheck();
    const metrics = services.monitoring.getDashboardData();
    
    return c.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: healthStatus,
      monitoring: metrics
    });
  } catch (error: any) {
    return c.json({
      status: 'error',
      timestamp: new Date().toISOString(),
      error: error.message
    }, 500);
  }
});

// Metrics endpoint
app.get('/metrics', async (c) => {
  try {
    const services = initializeServices(c.env || {});
    const metrics = services.monitoring.getDashboardData();
    return c.json(metrics);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

export default app; 