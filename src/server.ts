import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';
import LRUCache from 'lru-cache';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import pinoHttp from 'pino-http';
import { collectDefaultMetrics, register } from 'prom-client';
import { z } from 'zod';
import swaggerUi from 'swagger-ui-express';
import openApiDocument from '../openapi.json';
import { ApolloServer, gql } from 'apollo-server-express';
import GraphQLJSON from 'graphql-type-json';

export const app: Application = express();

// Enable CORS
app.use(cors());

// Rate limiting
app.use(rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW || '60000', 10),
  max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10)
}));

// Structured logging
app.use(pinoHttp());

// JSON parsing
app.use(express.json());

// Collect default Prometheus metrics
collectDefaultMetrics();

// Metrics endpoint
app.get('/metrics', async (_req, res) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

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

async function wikiSearch(query: string, limit: number, lang: string, offset: number) {
  const key = `search:${lang}:${query}:${limit}:${offset}`;
  if (cache.has(key)) return cache.get(key);
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&srlimit=${limit}&sroffset=${offset}`;
  const res = await fetch(url);
  const data = await res.json();
  cache.set(key, data);
  return data;
}

async function wikiPage(title: string, lang: string) {
  const key = `page:${lang}:${title}`;
  if (cache.has(key)) return cache.get(key);
  const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&format=json&prop=text|sections`;
  const res = await fetch(url);
  const data = await res.json();
  cache.set(key, data);
  return data;
}

// REST endpoint: GET /search
app.get('/search', async (req, res) => {
  const schema = z.object({
    q: z.string().min(1),
    limit: z.coerce.number().int().positive().max(50).default(10),
    offset: z.coerce.number().int().nonnegative().default(0),
    filter: z.string().optional().default('').transform(s => s.toLowerCase()),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).default('en'),
  });
  const parse = schema.safeParse({
    q: req.query.q as string,
    limit: req.query.limit,
    offset: req.query.offset,
    filter: req.query.filter as string,
    lang: req.query.lang as string
  });
  if (!parse.success) {
    return res.status(400).json({ error: 'Invalid query params', details: parse.error.format() });
  }
  const { q, limit, offset, filter, lang } = parse.data;
  try {
    const data = await wikiSearch(q, limit, lang, offset);
    let results: WikiSearchResult[] = data.query.search;
    if (filter) results = results.filter(r => r.title.toLowerCase().includes(filter));
    res.json({ results });
  } catch (err) {
    res.status(500).json({ error: 'Search failed', details: err });
  }
});

// REST endpoint: GET /page/:title
app.get('/page/:title', async (req, res) => {
  const schema = z.object({
    title: z.string().min(1),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).default('en')
  });
  const parse = schema.safeParse({ title: req.params.title, lang: req.query.lang as string });
  if (!parse.success) {
    return res.status(400).json({ error: 'Invalid parameters', details: parse.error.format() });
  }
  const { title, lang } = parse.data;
  try {
    const data = await wikiPage(title, lang);
    res.json({ page: data.parse });
  } catch (err) {
    res.status(500).json({ error: 'Page fetch failed', details: err });
  }
});

// Fetch page by numeric pageid
async function wikiPageById(id: number, lang: string) {
  const key = `pageById:${lang}:${id}`;
  if (cache.has(key)) return cache.get(key);
  const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&pageid=${id}&format=json&prop=text|sections`;
  const res = await fetch(url);
  const data = await res.json();
  cache.set(key, data);
  return data;
}

// REST endpoint: GET /pageid/:id
app.get('/pageid/:id', async (req, res) => {
  const schema = z.object({
    id: z.coerce.number().int().positive(),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).default('en')
  });
  const parse = schema.safeParse({ id: req.params.id, lang: req.query.lang as string });
  if (!parse.success) {
    return res.status(400).json({ error: 'Invalid parameters', details: parse.error.format() });
  }
  const { id: pageid, lang } = parse.data;
  try {
    const data = await wikiPageById(pageid, lang);
    res.json({ page: data.parse });
  } catch (err) {
    res.status(500).json({ error: 'Page fetch failed', details: err });
  }
});

// GraphQL schema definitions
const typeDefs = gql`
  scalar JSON
  type WikiSearchResult { title: String! snippet: String! pageid: Int! }
  type Page { title: String! pageid: Int text: String sections: JSON }
  type Query {
    search(q: String!, limit: Int = 10, offset: Int = 0, filter: String, lang: String = "en"): [WikiSearchResult!]!
    page(title: String!, lang: String = "en"): Page!
    pageById(id: Int!, lang: String = "en"): Page!
  }
`;

// Resolvers for GraphQL
const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    search: async (_: any, args: any) => {
      const data = await wikiSearch(args.q, args.limit, args.lang, args.offset);
      let res: WikiSearchResult[] = data.query.search;
      if (args.filter) res = res.filter(r => r.title.toLowerCase().includes(args.filter.toLowerCase()));
      return res;
    },
    page: async (_: any, args: any) => {
      const data = await wikiPage(args.title, args.lang);
      return data.parse;
    },
    pageById: async (_: any, args: any) => {
      const data = await wikiPageById(args.id, args.lang);
      return data.parse;
    }
  }
};

// server instance for graceful shutdown
let server: any;

// Graceful shutdown handler
const shutdown = () => {
  console.log('Graceful shutdown initiated');
  server.close(() => {
    console.log('All connections closed. Exiting.');
    process.exit(0);
  });
  setTimeout(() => { console.error('Forced shutdown.'); process.exit(1); }, 10000);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Start REST and GraphQL servers
async function startServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app as any, path: '/graphql' });
  // Choose random port in test environment to avoid EADDRINUSE
  const listenPort = process.env.NODE_ENV === 'test' ? 0 : port;
  server = app.listen(listenPort, () => console.log(`Server ready at http://localhost:${listenPort}`));
  return server;
}

// Only start server if run directly
if (require.main === module) {
  startServer().catch(err => { console.error('Startup error:', err); process.exit(1); });
}
export { startServer };
