#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import LRUCache from 'lru-cache';
import { EnhancedWikipediaService } from './wikipediaService.js';
import { WikipediaExtendedFeatures } from './additionalFeatures.js';
import { createWikipediaMcp } from './mcp.js';

// Configuration schema with Zod validation
const ConfigSchema = z.object({
  cache: z.object({
    max: z.number().int().positive().default(100),
    ttl: z.number().int().positive().default(300000), // 5 minutes in milliseconds
  }).default({}),
  wikipedia: z.object({
    defaultLanguage: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).default('en'),
    enableDeduplication: z.boolean().default(true),
    userAgent: z.string().optional(),
  }).default({}),
  server: z.object({
    name: z.string().default('wikipedia-mcp-server'),
    version: z.string().default('1.0.0'),
  }).default({}),
});

type Config = z.infer<typeof ConfigSchema>;

// Load configuration from environment variables
function loadConfig(): Config {
  const rawConfig = {
    cache: {
      max: process.env.CACHE_MAX ? parseInt(process.env.CACHE_MAX, 10) : undefined,
      ttl: process.env.CACHE_TTL ? parseInt(process.env.CACHE_TTL, 10) : undefined,
    },
    wikipedia: {
      defaultLanguage: process.env.DEFAULT_LANGUAGE,
      enableDeduplication: process.env.ENABLE_DEDUPLICATION === 'true',
      userAgent: process.env.USER_AGENT,
    },
    server: {
      name: process.env.SERVER_NAME,
      version: process.env.SERVER_VERSION,
    },
  };

  // Remove undefined values
  const cleanConfig = JSON.parse(JSON.stringify(rawConfig));
  
  try {
    return ConfigSchema.parse(cleanConfig);
  } catch (error) {
    console.error('Configuration validation failed:', error);
    console.error('Using default configuration');
    return ConfigSchema.parse({});
  }
}

async function main() {
  try {
    // Load and validate configuration
    const config = loadConfig();
    
    console.error(`Starting ${config.server.name} v${config.server.version}`);
    console.error(`Default language: ${config.wikipedia.defaultLanguage}`);
    console.error(`Cache enabled: ${config.cache.max} items, ${config.cache.ttl}ms TTL`);
    console.error(`Deduplication: ${config.wikipedia.enableDeduplication ? 'enabled' : 'disabled'}`);

    // Initialize cache
    const cache = new LRUCache<string, any>({
      max: config.cache.max,
      ttl: config.cache.ttl,
    });

    // Initialize Wikipedia service
    const wikipediaService = new EnhancedWikipediaService({
      cache,
      enableDeduplication: config.wikipedia.enableDeduplication,
      defaultLanguage: config.wikipedia.defaultLanguage,
    });

    // Initialize extended features
    const extendedFeatures = new WikipediaExtendedFeatures(wikipediaService);

    // Create MCP server
    const mcpServer = createWikipediaMcp(wikipediaService, extendedFeatures);

    // Create stdio transport
    const transport = new StdioServerTransport();

    // Connect the server to the transport
    await mcpServer.connect(transport);

    console.error('Wikipedia MCP Server started successfully');
    console.error('Ready to handle requests via stdio');

  } catch (error) {
    console.error('Failed to start Wikipedia MCP Server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.error('Received SIGINT, shutting down gracefully');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.error('Received SIGTERM, shutting down gracefully');
  process.exit(0);
});

// Start the server
main().catch((error) => {
  console.error('Unhandled error:', error);
  process.exit(1);
});
