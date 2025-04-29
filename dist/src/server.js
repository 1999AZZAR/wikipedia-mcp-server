"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
exports.startServer = startServer;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const node_fetch_1 = __importDefault(require("node-fetch"));
const lru_cache_1 = __importDefault(require("lru-cache"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const pino_http_1 = __importDefault(require("pino-http"));
const prom_client_1 = require("prom-client");
const zod_1 = require("zod");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const openapi_json_1 = __importDefault(require("../openapi.json"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const helmet_1 = __importDefault(require("helmet"));
exports.app = (0, express_1.default)();
// Security headers
exports.app.use((0, helmet_1.default)());
// CORS: restrict to allowed origins, blank array allows all
exports.app.use((0, cors_1.default)({ origin: config_1.ALLOWED_ORIGINS.length ? config_1.ALLOWED_ORIGINS : true }));
// Rate limiting
exports.app.use((0, express_rate_limit_1.default)({
    windowMs: config_1.RATE_LIMIT_WINDOW,
    max: config_1.RATE_LIMIT_MAX,
    keyGenerator: (req) => `${req.ip}:${req.method}:${req.originalUrl}`,
    handler: (req, res) => {
        console.warn(`Rate limit exceeded: ${req.ip} on ${req.method} ${req.originalUrl}`);
        res.status(429).json({ error: 'Too many requests' });
    }
}));
// Structured logging
exports.app.use((0, pino_http_1.default)());
// JSON parsing
exports.app.use(express_1.default.json());
// Collect default Prometheus metrics
(0, prom_client_1.collectDefaultMetrics)();
// Metrics endpoint
exports.app.get('/metrics', async (_req, res) => {
    res.set('Content-Type', prom_client_1.register.contentType);
    res.send(await prom_client_1.register.metrics());
});
// Swagger UI
exports.app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapi_json_1.default));
// Serve raw OpenAPI spec
exports.app.get('/openapi.json', (_req, res) => res.json(openapi_json_1.default));
// Health & readiness
exports.app.get('/health', (_req, res) => res.json({ status: 'ok' }));
exports.app.get('/ready', (_req, res) => res.json({ status: 'ready' }));
const port = config_1.PORT;
const cache = new lru_cache_1.default({ max: config_1.CACHE_MAX, ttl: config_1.CACHE_TTL });
async function wikiSearch(query, limit, lang, offset) {
    const key = `search:${lang}:${query}:${limit}:${offset}`;
    if (cache.has(key))
        return cache.get(key);
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&srlimit=${limit}&sroffset=${offset}`;
    const res = await (0, node_fetch_1.default)(url);
    const data = await res.json();
    cache.set(key, data);
    return data;
}
async function wikiPage(title, lang) {
    const key = `page:${lang}:${title}`;
    if (cache.has(key))
        return cache.get(key);
    const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&format=json&prop=text|sections`;
    const res = await (0, node_fetch_1.default)(url);
    const data = await res.json();
    cache.set(key, data);
    return data;
}
// REST endpoint: GET /search
exports.app.get('/search', (0, middleware_1.wrapAsync)(async (req, res) => {
    const schema = zod_1.z.object({
        q: zod_1.z.string().min(1),
        limit: zod_1.z.coerce.number().int().positive().max(50).default(10),
        offset: zod_1.z.coerce.number().int().nonnegative().default(0),
        filter: zod_1.z.string().optional().default('').transform(s => s.toLowerCase()),
        lang: zod_1.z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).default('en'),
    });
    const parse = schema.safeParse({
        q: req.query.q,
        limit: req.query.limit,
        offset: req.query.offset,
        filter: req.query.filter,
        lang: req.query.lang
    });
    if (!parse.success) {
        return res.status(400).json({ error: 'Invalid query params', details: parse.error.format() });
    }
    const { q, limit, offset, filter, lang } = parse.data;
    try {
        const data = await wikiSearch(q, limit, lang, offset);
        let results = data.query.search;
        if (filter)
            results = results.filter(r => r.title.toLowerCase().includes(filter));
        res.json({ results });
    }
    catch (err) {
        res.status(500).json({ error: 'Search failed', details: err });
    }
}));
// REST endpoint: GET /page/:title
exports.app.get('/page/:title', (0, middleware_1.wrapAsync)(async (req, res) => {
    const schema = zod_1.z.object({
        title: zod_1.z.string().min(1),
        lang: zod_1.z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).default('en')
    });
    const parse = schema.safeParse({ title: req.params.title, lang: req.query.lang });
    if (!parse.success) {
        return res.status(400).json({ error: 'Invalid parameters', details: parse.error.format() });
    }
    const { title, lang } = parse.data;
    try {
        const data = await wikiPage(title, lang);
        res.json({ page: data.parse });
    }
    catch (err) {
        res.status(500).json({ error: 'Page fetch failed', details: err });
    }
}));
// Fetch page by numeric pageid
async function wikiPageById(id, lang) {
    const key = `pageById:${lang}:${id}`;
    if (cache.has(key))
        return cache.get(key);
    const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&pageid=${id}&format=json&prop=text|sections`;
    const res = await (0, node_fetch_1.default)(url);
    const data = await res.json();
    cache.set(key, data);
    return data;
}
// REST endpoint: GET /pageid/:id
exports.app.get('/pageid/:id', (0, middleware_1.wrapAsync)(async (req, res) => {
    const schema = zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
        lang: zod_1.z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).default('en')
    });
    const parse = schema.safeParse({ id: req.params.id, lang: req.query.lang });
    if (!parse.success) {
        return res.status(400).json({ error: 'Invalid parameters', details: parse.error.format() });
    }
    const { id: pageid, lang } = parse.data;
    try {
        const data = await wikiPageById(pageid, lang);
        res.json({ page: data.parse });
    }
    catch (err) {
        res.status(500).json({ error: 'Page fetch failed', details: err });
    }
}));
// GraphQL schema definitions
const typeDefs = (0, apollo_server_express_1.gql) `
  scalar JSON
  type WikiSearchResult { title: String! snippet: String! pageid: Int! }
  type Page { title: String! pageid: Int! text: String! sections: JSON! }
  type Query {
    search(q: String!, limit: Int = 10, offset: Int = 0, filter: String, lang: String = "en"): [WikiSearchResult!]!
    page(title: String!, lang: String = "en"): Page!
    pageById(id: Int!, lang: String = "en"): Page!
  }
`;
// Resolvers for GraphQL
const resolvers = {
    JSON: graphql_type_json_1.default,
    Query: {
        search: async (_, args) => {
            const data = await wikiSearch(args.q, args.limit, args.lang, args.offset);
            let res = data.query.search;
            if (args.filter)
                res = res.filter(r => r.title.toLowerCase().includes(args.filter.toLowerCase()));
            return res;
        },
        page: async (_, args) => {
            const data = await wikiPage(args.title, args.lang);
            const parsed = data.parse;
            return {
                title: parsed.title,
                pageid: parsed.pageid,
                text: (parsed.text && (parsed.text['*'] ?? '')),
                sections: parsed.sections
            };
        },
        pageById: async (_, args) => {
            const data = await wikiPageById(args.id, args.lang);
            const parsed = data.parse;
            return {
                title: parsed.title,
                pageid: parsed.pageid,
                text: (parsed.text && (parsed.text['*'] ?? '')),
                sections: parsed.sections
            };
        }
    }
};
// server instance for graceful shutdown
let server;
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
    const apolloServer = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: exports.app, path: '/graphql' });
    // Choose random port in test environment to avoid EADDRINUSE
    const listenPort = process.env.NODE_ENV === 'test' ? 0 : port;
    server = exports.app.listen(listenPort, () => console.log(`Server ready at http://localhost:${listenPort}`));
    return server;
}
// Only start server if run directly
if (require.main === module) {
    startServer().catch(err => { console.error('Startup error:', err); process.exit(1); });
}
// Centralized error handler
exports.app.use(middleware_1.errorHandler);
