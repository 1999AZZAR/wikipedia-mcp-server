import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { JSONRPCServer } from './jsonrpc.js';
import { WorkerTransport } from './WorkerTransport.js';
import { EnhancedWikipediaService } from './wikipediaService.js';
import { WikipediaExtendedFeatures } from './additionalFeatures.js';
import { MonitoringService } from './monitoring.js';
import { z } from 'zod';
import LRUCache from 'lru-cache';

// Enhanced environment bindings
interface EnhancedEnvBindings {
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
  
  // Optional rate limiting
  RATE_LIMITER?: Fetcher;
}

const app = new Hono<{ Bindings: EnhancedEnvBindings }>();

// Global instances
let lruCache: LRUCache<string, any> | null = null;
let wikipediaService: EnhancedWikipediaService | null = null;
let extendedFeatures: WikipediaExtendedFeatures | null = null;
let monitoring: MonitoringService | null = null;

// Initialize services
function initializeServices(env: EnhancedEnvBindings): {
  wikipediaService: EnhancedWikipediaService;
  extendedFeatures: WikipediaExtendedFeatures;
  monitoring: MonitoringService;
} {
  if (!lruCache) {
    const max = parseInt(env.CACHE_MAX || '', 10) || 100;
    const ttl = parseInt(env.CACHE_TTL || '', 10) || 300000; // 5 minutes
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

app.use('*', logger());

// Enhanced MCP endpoint with full feature set
app.post('/mcp', async (c) => {
  const { wikipediaService, extendedFeatures, monitoring } = initializeServices(c.env);
  
  let requestBody: any;
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  try {
    requestBody = await c.req.json();
  } catch (e) {
    const errorResponse = {
      jsonrpc: '2.0',
      error: { code: -32700, message: 'Parse error: Invalid JSON' },
      id: null
    };
    
    monitoring.logger.error('JSON parse error', { error: (e as Error).message }, requestId);
    return c.json(errorResponse, 400);
  }

  try {
    const transport = new WorkerTransport(c);
    const jsonRpcServer = new JSONRPCServer(transport);

    // Enhanced validation schemas
    const searchSchema = z.object({
      query: z.string().min(1),
      limit: z.number().int().positive().max(50).optional().default(10),
      lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
      offset: z.number().int().nonnegative().optional().default(0),
      includeSnippets: z.boolean().optional().default(true),
    });

    const pageSchema = z.object({
      title: z.string().min(1),
      lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
      sections: z.boolean().optional().default(true),
      images: z.boolean().optional().default(false),
      links: z.boolean().optional().default(false),
      categories: z.boolean().optional().default(false),
    });

    const pageByIdSchema = z.object({
      id: z.number().int().positive(),
      lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
      sections: z.boolean().optional().default(true),
      images: z.boolean().optional().default(false),
      links: z.boolean().optional().default(false),
      categories: z.boolean().optional().default(false),
    });

    // Core Wikipedia methods
    jsonRpcServer.on('wikipedia.search', async (params: unknown) => {
      const parseResult = searchSchema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.search',
        parseResult.data,
        requestId,
        async () => {
          const result = await wikipediaService.search(parseResult.data.query, parseResult.data);
          return result?.query?.search || [];
        }
      );
    });

    jsonRpcServer.on('wikipedia.page', async (params: unknown) => {
      const parseResult = pageSchema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.page',
        parseResult.data,
        requestId,
        async () => {
          const result = await wikipediaService.getPage(parseResult.data.title, parseResult.data);
          return result?.parse || null;
        }
      );
    });

    jsonRpcServer.on('wikipedia.pageById', async (params: unknown) => {
      const parseResult = pageByIdSchema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.pageById',
        parseResult.data,
        requestId,
        async () => {
          const result = await wikipediaService.getPageById(parseResult.data.id, parseResult.data);
          return result?.parse || null;
        }
      );
    });

    // Extended features
    jsonRpcServer.on('wikipedia.summary', async (params: unknown) => {
      const schema = z.object({
        title: z.string().min(1),
        lang: z.string().optional().default('en'),
      });
      
      const parseResult = schema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.summary',
        parseResult.data,
        requestId,
        async () => {
          return await wikipediaService.getPageSummary(parseResult.data.title, parseResult.data.lang);
        }
      );
    });

    jsonRpcServer.on('wikipedia.random', async (params: unknown) => {
      const schema = z.object({
        lang: z.string().optional().default('en'),
      });
      
      const parseResult = schema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.random',
        parseResult.data,
        requestId,
        async () => {
          const result = await wikipediaService.getRandomPage(parseResult.data.lang);
          return result?.query?.random?.[0] || null;
        }
      );
    });

    jsonRpcServer.on('wikipedia.batchSearch', async (params: unknown) => {
      const schema = z.object({
        queries: z.array(z.string().min(1)).max(10), // Limit batch size
        lang: z.string().optional().default('en'),
        limit: z.number().int().positive().max(20).optional().default(5),
        concurrency: z.number().int().positive().max(5).optional().default(3),
      });
      
      const parseResult = schema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.batchSearch',
        parseResult.data,
        requestId,
        async () => {
          return await extendedFeatures.batchSearch(parseResult.data.queries, parseResult.data);
        }
      );
    });

    jsonRpcServer.on('wikipedia.related', async (params: unknown) => {
      const schema = z.object({
        title: z.string().min(1),
        lang: z.string().optional().default('en'),
        limit: z.number().int().positive().max(50).optional().default(10),
        method: z.enum(['links', 'categories', 'backlinks']).optional().default('links'),
      });
      
      const parseResult = schema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.related',
        parseResult.data,
        requestId,
        async () => {
          return await extendedFeatures.getRelatedArticles(parseResult.data.title, parseResult.data);
        }
      );
    });

    jsonRpcServer.on('wikipedia.searchNearby', async (params: unknown) => {
      const schema = z.object({
        lat: z.number().min(-90).max(90),
        lon: z.number().min(-180).max(180),
        radius: z.number().int().positive().max(100000).optional().default(10000), // Max 100km
        lang: z.string().optional().default('en'),
        limit: z.number().int().positive().max(50).optional().default(10),
      });
      
      const parseResult = schema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.searchNearby',
        parseResult.data,
        requestId,
        async () => {
          const result = await extendedFeatures.searchNearby(parseResult.data);
          return result?.query?.geosearch || [];
        }
      );
    });

    jsonRpcServer.on('wikipedia.trending', async (params: unknown) => {
      const schema = z.object({
        lang: z.string().optional().default('en'),
        date: z.string().regex(/^\d{4}\/\d{2}\/\d{2}$/).optional(),
      });
      
      const parseResult = schema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters: ${parseResult.error.message}`);
      }
      
      return monitoring.monitorRequest(
        'wikipedia.trending',
        parseResult.data,
        requestId,
        async () => {
          const result = await extendedFeatures.getTrendingArticles(parseResult.data);
          return result?.items?.slice(0, 20) || []; // Top 20 trending
        }
      );
    });

    // Process the request
    return await jsonRpcServer.processRequest(requestBody);

  } catch (error: any) {
    monitoring.logger.error('Error processing MCP request', { 
      error: (error as Error).message,
      stack: (error as Error).stack,
      requestBody 
    }, requestId);
    
    const requestIdFromBody = (typeof requestBody === 'object' && requestBody !== null && typeof requestBody.id !== 'undefined') ? requestBody.id : null;
    return c.json({
      jsonrpc: '2.0',
      error: { code: -32603, message: `Internal server error: ${(error as Error).message}` },
      id: requestIdFromBody
    }, 500);
  }
});

// Health check endpoint with comprehensive monitoring
app.get('/health', async (c) => {
  const { wikipediaService, monitoring } = initializeServices(c.env);
  
  try {
    const healthData = await wikipediaService.healthCheck();
    const monitoringData = monitoring.getDashboardData();
    
    const overallStatus = healthData.status === 'healthy' && 
                         monitoringData.health.errorRate < 0.1 ? 'healthy' : 
                         healthData.status === 'unhealthy' || 
                         monitoringData.health.errorRate > 0.5 ? 'unhealthy' : 'degraded';
    
    return c.json({
      status: overallStatus,
      timestamp: new Date().toISOString(),
      wikipedia: healthData,
      monitoring: monitoringData.health,
      cache: healthData.cache,
      deduplication: healthData.deduplication
    });
  } catch (error) {
    return c.json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: (error as Error).message
    }, 500);
  }
});

// Monitoring dashboard endpoint
app.get('/metrics', async (c) => {
  const { monitoring } = initializeServices(c.env);
  
  return c.json({
    timestamp: new Date().toISOString(),
    ...monitoring.getDashboardData()
  });
});

// List all available methods
app.get('/methods', (c) => {
  return c.json({
    core: [
      'wikipedia.search',
      'wikipedia.page', 
      'wikipedia.pageById'
    ],
    extended: [
      'wikipedia.summary',
      'wikipedia.random',
      'wikipedia.batchSearch',
      'wikipedia.related',
      'wikipedia.searchNearby',
      'wikipedia.trending'
    ],
    description: 'Enhanced Wikipedia MCP Server with resilience and monitoring'
  });
});

export default app; 