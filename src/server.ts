import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';
import LRUCache from 'lru-cache';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import openApiDocument from '../openapi.json';

const app = express();
// Logging and JSON parsing
app.use(morgan('combined'));
app.use(express.json());
// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
// Serve raw OpenAPI spec
app.get('/openapi.json', (_req, res) => res.json(openApiDocument));
// Health & readiness
app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/ready', (_req, res) => res.json({ status: 'ready' }));

const port = parseInt(process.env.PORT || '3000', 10);
const CACHE_MAX = parseInt(process.env.CACHE_MAX || '100', 10);
const CACHE_TTL = parseInt(process.env.CACHE_TTL || '300000', 10);

type WikiSearchResult = {
  title: string;
  snippet: string;
  pageid: number;
};

const cache = new LRUCache<string, any>({ max: CACHE_MAX, ttl: CACHE_TTL });

async function wikiSearch(query: string, limit: number) {
  const key = `search:${query}:${limit}`;
  if (cache.has(key)) return cache.get(key);
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&srlimit=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  cache.set(key, data);
  return data;
}

async function wikiPage(title: string) {
  const key = `page:${title}`;
  if (cache.has(key)) return cache.get(key);
  const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&format=json&prop=text|sections`;
  const res = await fetch(url);
  const data = await res.json();
  cache.set(key, data);
  return data;
}

app.get('/search', async (req, res) => {
  const q = String(req.query.q || '');
  const limit = Number(req.query.limit) || 10;
  const filter = String(req.query.filter || '').toLowerCase();
  if (!q) return res.status(400).json({ error: 'Missing query parameter q' });
  try {
    const data = await wikiSearch(q, limit);
    let results: WikiSearchResult[] = data.query.search;
    if (filter) {
      results = results.filter(r => r.title.toLowerCase().includes(filter));
    }
    res.json({ results });
  } catch (err) {
    res.status(500).json({ error: 'Search failed', details: err });
  }
});

app.get('/page/:title', async (req, res) => {
  const title = String(req.params.title);
  try {
    const data = await wikiPage(title);
    res.json({ page: data.parse });
  } catch (err) {
    res.status(500).json({ error: 'Page fetch failed', details: err });
  }
});

// Start server and handle graceful shutdown
const server = app.listen(port, () => console.log(`Wikipedia MCP server listening at http://localhost:${port}`));

// Graceful shutdown handler
const shutdown = () => {
  console.log('Graceful shutdown initiated');
  server.close(() => {
    console.log('All connections closed. Exiting.');
    process.exit(0);
  });
  // Force exit after 10s
  setTimeout(() => {
    console.error('Forced shutdown.');
    process.exit(1);
  }, 10000);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
