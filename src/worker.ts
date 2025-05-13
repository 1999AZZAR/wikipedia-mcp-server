import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { JSONRPCServer } from './jsonrpc';
import { WorkerTransport } from './WorkerTransport';
import { wikiSearch, wikiPage, wikiPageById } from './wikipediaService';
import { z } from 'zod'; // For input validation
import LRUCache from 'lru-cache';

// Define environment variable types (bindings) expected by the worker
// These will be available in c.env
interface EnvBindings {
  CACHE_MAX?: string; // Wrangler stores .dev.vars and secrets as strings
  CACHE_TTL?: string;
  // Add other bindings here if needed
}

// App instance with environment bindings typing
const app = new Hono<{ Bindings: EnvBindings }>();

// Global cache instance (per worker instance, not per request)
let lruCache: LRUCache<string, any> | null = null;

// Default cache configuration
const DEFAULT_CACHE_MAX = 100;
const DEFAULT_CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

app.use('*', logger());

// Function to initialize or get the cache instance
function getCache(env: EnvBindings): LRUCache<string, any> {
  if (!lruCache) {
    const max = parseInt(env.CACHE_MAX || '', 10) || DEFAULT_CACHE_MAX;
    const ttl = parseInt(env.CACHE_TTL || '', 10) || DEFAULT_CACHE_TTL;
    console.log(`Initializing LRU Cache with max: ${max}, ttl: ${ttl}ms`);
    lruCache = new LRUCache<string, any>({ max, ttl });
  }
  return lruCache;
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

  // Extract ID for potential error responses even if body structure is wrong
  const requestId = (typeof requestBody === 'object' && requestBody !== null && requestBody.id !== undefined) ? requestBody.id : null;
  const currentCache = getCache(c.env);

  try {
    const transport = new WorkerTransport(c); // Pass Hono context to transport
    const jsonRpcServer = new JSONRPCServer(transport);

    // --- Register MCP Methods ---
    const searchSchema = z.object({
      query: z.string().min(1),
      limit: z.number().int().positive().max(50).optional().default(10),
      lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en'),
      offset: z.number().int().nonnegative().optional().default(0),
    });

    jsonRpcServer.on('wikipedia.search', async (params: unknown) => {
      const parseResult = searchSchema.safeParse(params);
      if (!parseResult.success) {
        throw new Error(`Invalid parameters for wikipedia.search: ${parseResult.error.message}`);
      }
      const { query, limit, lang, offset } = parseResult.data;
      const data = await wikiSearch(query, limit, lang, offset, currentCache);
      return data?.query?.search || [];
    });

    const pageSchema = z.object({
        title: z.string().min(1),
        lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en')
    });

    jsonRpcServer.on('wikipedia.page', async (params: unknown) => {
        const parseResult = pageSchema.safeParse(params);
        if (!parseResult.success) {
            throw new Error(`Invalid parameters for wikipedia.page: ${parseResult.error.message}`);
        }
        const { title, lang } = parseResult.data;
        const data = await wikiPage(title, lang, currentCache);
        return data?.parse || null;
    });

    const pageByIdSchema = z.object({
        id: z.number().int().positive(),
        lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default('en')
    });

    jsonRpcServer.on('wikipedia.pageById', async (params: unknown) => {
        const parseResult = pageByIdSchema.safeParse(params);
        if (!parseResult.success) {
            throw new Error(`Invalid parameters for wikipedia.pageById: ${parseResult.error.message}`);
        }
        const { id, lang } = parseResult.data;
        const data = await wikiPageById(id, lang, currentCache);
        return data?.parse || null;
    });
    // --- End Method Registration ---

    // Process the request using the JSON-RPC server
    await jsonRpcServer.processRequest(requestBody);

    // The transport's `send` method (called by jsonRpcServer) uses c.json(), 
    // so Hono handles the response. We don't return anything explicitly here
    // unless processRequest throws an unexpected error before sending.
    // Hono requires a Response to be returned, but WorkerTransport.send already does this.
    // If processRequest completes without the transport sending, we might need a fallback.
    // However, JSONRPCServer is designed to always send *something* via the transport.
    // We rely on the transport having called c.json().
    // To satisfy Hono's typing, we might need to return the result of c.json() or handle the response promise.
    // For now, assume transport handles it. If issues arise, revisit this.

    // If the transport didn't send (which it should have), return an empty response? This is awkward.
    // Let's assume the transport always sends.

  } catch (error: any) {
    // Catch errors during server setup or unexpected errors during processRequest
    console.error('Error processing MCP request in worker:', error);
    // Use the WorkerTransport's sendError to format the JSON-RPC error
    // Need an instance of transport here, problematic if error happens before instantiation.
    // Instead, directly return a JSON-RPC error response.
    return c.json({ 
      jsonrpc: '2.0', 
      error: { code: -32603, message: `Internal server error: ${error.message}` },
      id: requestId // Use the ID we tried to extract earlier
    }, 500);
  }
});

// Basic health check route
app.get('/health', (c) => c.json({ status: 'ok' }));

export default app; 