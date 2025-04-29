# Wikipedia MCP Server

A minimal TypeScript-based HTTP server exposing Wikipedia search and page retrieval via the MediaWiki API, featuring configurable caching and flexible integration.

## Features

- **Search**: `GET /search?q=QUERY&limit=N&filter=FILTER` for article search with optional title filtering.
- **Page Fetch**: `GET /page/:title` to retrieve parsed HTML and section data for a given page.
- **Configurable LRU Cache** to speed up repeated requests (`CACHE_MAX`, `CACHE_TTL`).
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

## Usage Examples

**cURL**
```bash
curl "http://localhost:3000/search?q=TypeScript&limit=5"
curl "http://localhost:3000/page/JavaScript"
```

**Node.js**
```js
import fetch from 'node-fetch';
async function query() {
  const res = await fetch('http://localhost:3000/search?q=Express');
  console.log(await res.json());
}
query();
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
