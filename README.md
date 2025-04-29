# Wikipedia MCP Server

A minimal TypeScript-based HTTP server exposing Wikipedia search and page retrieval via the MediaWiki API, featuring configurable caching and flexible integration.

## Features

- **Search**: `GET /search?q=QUERY&limit=N&filter=FILTER` for article search with optional title filtering.
- **Page Fetch**: `GET /page/:title` to retrieve parsed HTML and section data for a given page.
- **Page Fetch by ID**: `GET /pageid/:id` to retrieve parsed HTML and section data for a given page ID.
- **Configurable LRU Cache** to speed up repeated requests (`CACHE_MAX`, `CACHE_TTL`).
- **Security headers** via helmet.
- **Configurable CORS** origins (`ALLOWED_ORIGINS`).
- **Rate limiting** by IP+endpoint (`RATE_LIMIT_WINDOW`, `RATE_LIMIT_MAX`).
- Written in **TypeScript** with full type safety.

## Requirements

- Node.js v14+ or later
- npm

## Installation

```bash
git clone https://github.com/1999AZZAR/wikipedia-mcp-server.git
cd wikipedia-mcp-server
cp .env.example .env
npm install
npm run build
```

## Configuration

Create a `.env` file in project root (see `.env.example`):

- `PORT` (default: 3000): HTTP port.
- `CACHE_MAX` (default: 100): max entries in LRU cache.
- `CACHE_TTL` (default: 300000): cache entry TTL in milliseconds.
- `RATE_LIMIT_WINDOW` (default: 60000): rate limit window in milliseconds.
- `RATE_LIMIT_MAX` (default: 100): max requests per rate limit window.
- `ALLOWED_ORIGINS` (default: empty): comma-separated CORS origins; leave empty to allow all.

## Running the Server

```bash
npm run start
```

By default, the server listens on http://localhost:${PORT:-3000}.

## API Documentation

Access interactive Swagger UI at `http://localhost:3000/docs` (or your configured `PORT`).

Raw OpenAPI spec available at `/openapi.json`.

## API Endpoints

### GET /health

Liveness check endpoint.

**Response**
```json
{ "status": "ok" }
```

### GET /ready

Readiness check endpoint.

**Response**
```json
{ "status": "ready" }
```

### GET /search

Search Wikipedia articles.

| Parameter | Type   | Required | Default | Description                              |
|-----------|--------|----------|---------|------------------------------------------|
| q         | string | yes      | —       | Search query                             |
| limit     | number | no       | 10      | Max number of results                    |
| filter    | string | no       | —       | Case-insensitive substring filter on titles |

**Response**
```json
{ "results": [ { "title": "Node.js", "snippet": "...", "pageid": 12345 }, ... ] }
```

### GET /page/:title

Fetch and parse a Wikipedia page.

| Parameter | Type   | Required | Description                     |
|-----------|--------|----------|---------------------------------|
| title     | string | yes      | URL-encoded page title          |

**Response**
```json
{ "page": { "title": "Node.js", "pageid": 12345, "text": "<p>...</p>", "sections": [ ... ] } }
```

### GET /pageid/:id

Fetch and parse a Wikipedia page by numeric ID.

| Parameter | Type    | Required | Default | Description          |
|-----------|---------|----------|---------|----------------------|
| id        | integer | yes      | —       | Numeric page ID      |
| lang      | string  | no       | en      | Language code (e.g. en, fr) |

**Response**
```json
{ "page": { "title": "Node.js", "pageid": 12345, "text": "<p>...</p>", "sections": [ ... ] } }
```

## Usage Examples
### REST - cURL
```bash
curl "http://localhost:3000/search?q=TypeScript&limit=5"
curl "http://localhost:3000/page/JavaScript"
curl "http://localhost:3000/pageid/12345?lang=en"
```

### REST - Node.js
```ts
import fetch from 'node-fetch';
async function restQuery() {
  const res = await fetch('http://localhost:3000/search?q=Express');
  console.log(await res.json());
}
restQuery();

async function getById() {
  const res = await fetch('http://localhost:3000/pageid/12345?lang=en');
  console.log(await res.json());
}
getById();
```

### GraphQL - cURL
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ search(q:\"Node.js\") { title snippet pageid } }"}'
```

### GraphQL - Node.js
```ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});
client.query({
  query: gql`{ page(title: "TypeScript") { title text } }`
}).then(console.log);

client.query({
  query: gql`{ pageById(id: 21721040) { title text sections } }`
}).then(console.log);
```

### JSON-RPC - Node.js (stdin/stdout)
```ts
import { StdioTransport } from './src/transport';
import { JSONRPCServer } from './src/jsonrpc';

const transport = new StdioTransport();
const rpcServer = new JSONRPCServer(transport);
rpcServer.on('search', async ({ q, limit }) => {
  // implement your handler, e.g. call wikiSearch(q, limit)
  return /* result */;
});
await rpcServer.start();
```

## Testing
Run unit tests:
```bash
npm test
```

## Integration

### Standalone Server

Run as a separate service and call endpoints over HTTP from your application or microservices.

### Embedding in Your Express App

Import handlers (if exposed) or proxy requests:

```ts
import express from 'express';
import proxy from 'http-proxy-middleware';
const app = express();

// Proxy to Wikipedia MCP server
app.use('/api', proxy({ target: 'http://localhost:3000', changeOrigin: true }));

app.listen(4000);
```

*Alternatively*, extract request logic from `src/server.ts` to use functions directly in your codebase.

## Desktop App Integration

Use a JSON config in your desktop (e.g., Electron) app:

```json
// config.json
{
  "mcpServer": {
    "baseUrl": "http://localhost:3000",
    "timeout": 5000
  }
}
```

Load and call endpoints:

```ts
import config from './config.json';

const { baseUrl, timeout } = config.mcpServer;

async function search(query: string) {
  const res = await fetch(`${baseUrl}/search?q=${encodeURIComponent(query)}`, { timeout });
  return res.json();
}

async function getPage(title: string) {
  const res = await fetch(`${baseUrl}/page/${encodeURIComponent(title)}`, { timeout });
  return res.json();
}

async function getPageById(id: number) {
  const res = await fetch(`${baseUrl}/pageid/${id}?lang=en`, { timeout });
  return res.json();
}
```

## GraphQL API

Interactive GraphQL Playground at `http://localhost:${PORT:-3000}/graphql`.

**Example Query**
```graphql
query {
  search(q: "TypeScript", limit: 5) {
    title
    snippet
    pageid
  }
}
```
```graphql
query GetPage { page(title: "Node.js") { title pageid text sections } }
```
```graphql
query GetPageById {
  pageById(id: 21721040) {
    title
    text
    sections
  }
}
```

## SDK Generation

Auto-generate a TypeScript client from OpenAPI:
```bash
npm run gen:client
```
Client will appear at `src/sdk/client.ts`, which you can import:
```ts
import { paths } from './sdk/client';
```
Use this for typed REST calls in your apps.

## Docker (Optional)

```dockerfile
FROM node:16
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm","run","start"]
```

## Contributing

Contributions welcome! Please open issues or PRs for features and bug fixes.

## License

MIT
