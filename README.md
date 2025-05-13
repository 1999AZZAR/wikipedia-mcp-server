# Wikipedia MCP Server (Cloudflare Worker)

A Cloudflare Worker exposing Wikipedia search and page retrieval via the Model Context Protocol (MCP) standard using JSON-RPC 2.0.

## Features

- **MCP Endpoint**: `POST /mcp` endpoint supporting JSON-RPC 2.0 requests for Wikipedia operations.
  - `wikipedia.search`: Search for articles.
  - `wikipedia.page`: Get page content by title.
  - `wikipedia.pageById`: Get page content by ID.
- **Configurable LRU Cache** (In-memory per instance, consider KV/Caches API for persistence).
- Written in **TypeScript** with Hono.
- Deployable to **Cloudflare Workers**.

## Requirements

- Node.js (check `.nvmrc` or `package.json` engines if specified)
- npm or yarn
- Wrangler CLI (Cloudflare's Worker CLI)
- A Cloudflare account

## Installation

```bash
git clone https://github.com/your-repo/wikipedia-mcp-server.git # Replace with your repo URL
cd wikipedia-mcp-server
npm install
npm install -g wrangler # Or install locally: npm install --save-dev wrangler
wrangler login # Authenticate with Cloudflare
```

## Configuration

Worker configuration is managed via `wrangler.toml`.

- **`name`**: Name of the worker on Cloudflare.
- **`main`**: Entry point script (`dist/worker.js` after build).
- **`compatibility_date`**: Sets the runtime compatibility date.
- **`[build]`**: Specifies the build command (`npm run build`).

**Local Development Variables:**

Create a `.dev.vars` file in the `wikipedia` directory root for local development using `wrangler dev`. Wrangler automatically loads this file. Example:

```toml
# .dev.vars (optional, for local development overrides)
CACHE_MAX=200
CACHE_TTL=600000 # 10 minutes
```

**Deployed Variables (Secrets & Environment Variables):**

For deployed workers, configure environment variables and secrets via the Cloudflare dashboard or using `wrangler secret put VAR_NAME`. These might be needed if extending functionality (e.g., API keys for other services).

## Running Locally

```bash
npm run dev
```

This starts a local server using Wrangler, simulating the Cloudflare environment. It typically listens on `http://localhost:8787`. Check the Wrangler output for the exact address. The `/mcp` endpoint will be available at this address.

## Deployment

```bash
npm run deploy
```

This command builds the worker using `npm run build` (as defined in `wrangler.toml`) and deploys it to your Cloudflare account. Wrangler will output the URL of your deployed worker.

## API Endpoint

### POST /mcp (JSON-RPC 2.0)

The single endpoint `/mcp` accepts `POST` requests with a JSON-RPC 2.0 payload.

**Request Format**
```json
{
  "jsonrpc": "2.0",
  "method": "<method_name>",
  "params": { ... }, // Method-specific parameters
  "id": "<request_id>"
}
```

**Supported Methods**

*   `wikipedia.search`
    *   **Params**: `{ "query": string, "limit"?: number, "lang"?: string }` (Note: `offset` might need re-implementation if required)
    *   **Result**: Array of search result objects (`{ title, snippet, pageid }`)
*   `wikipedia.page`
    *   **Params**: `{ "title": string, "lang"?: string }`
    *   **Result**: Page object (`{ title, pageid, text, sections }`) or `null`
*   `wikipedia.pageById`
    *   **Params**: `{ "id": number, "lang"?: string }`
    *   **Result**: Page object (`{ title, pageid, text, sections }`) or `null`

**Response Format (Success/Error)**: Standard JSON-RPC 2.0 success/error objects.

## Integrations

(This section remains largely the same, just update example URLs if needed)

This MCP-compliant Wikipedia server can be integrated into various tools and platforms that support consuming JSON-RPC 2.0 services over HTTP. The primary integration point is the `/mcp` endpoint.

### Cursor

To integrate this Wikipedia service with Cursor, configure Cursor to make requests to this worker's `/mcp` endpoint (e.g., `https://your-worker-name.your-subdomain.workers.dev/mcp` after deployment, or `http://localhost:8787/mcp` during local development).

The request body should follow the JSON-RPC 2.0 specification:
```json
{
  "jsonrpc": "2.0",
  "method": "wikipedia.search",
  "params": { "query": "Cloudflare Workers", "limit": 5 },
  "id": "cursor-req-123"
}
```
Refer to Cursor\'s documentation for specific instructions.

### Windsurf

If Windsurf can consume standard JSON-RPC 2.0 endpoints over HTTP, configure it to point to this worker's `/mcp` endpoint (e.g., `https://your-worker-name.your-subdomain.workers.dev/mcp`).

Consult the Windsurf documentation for details.

## Testing

**Note:** The existing tests (`src/__tests__/server.test.ts`) were designed for the previous Express server and are **not compatible** with the Cloudflare Worker setup. They need to be rewritten using tools suitable for testing Hono applications within a Worker context, such as:
- Hono's built-in testing utilities (`app.request(...)`).
- `vitest` with `miniflare` or a similar Worker environment simulator.

*This section needs updates once tests are implemented.*

## Usage Examples

(Removed REST/GraphQL examples. Updated JSON-RPC examples to use a placeholder worker URL).

### JSON-RPC - cURL

(Replace `http://localhost:8787/mcp` with your deployed worker URL if testing against deployment)

```bash
# Search
curl -X POST http://localhost:8787/mcp \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc": "2.0", 
    "method": "wikipedia.search", 
    "params": { "query": "Hono", "limit": 2 }, 
    "id": "search-1"
  }'

# Get Page by Title
curl -X POST http://localhost:8787/mcp \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc": "2.0", 
    "method": "wikipedia.page", 
    "params": { "title": "Cloudflare", "lang": "en" }, 
    "id": "page-1"
  }'

# Get Page by ID
curl -X POST http://localhost:8787/mcp \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc": "2.0", 
    "method": "wikipedia.pageById", 
    "params": { "id": 21721040, "lang": "en" }, 
    "id": "pageid-1"
  }'
```

### JSON-RPC - Node.js (using node-fetch)

(Replace `WORKER_URL` with your local or deployed worker URL)

```ts
import fetch from 'node-fetch';

const WORKER_URL = 'http://localhost:8787/mcp'; // Or your deployed URL

async function jsonRpcRequest(method: string, params: Record<string, any>) {
  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method,
      params,
      id: Date.now().toString() // Example ID
    })
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

async function main() {
  try {
    const searchResults = await jsonRpcRequest('wikipedia.search', { query: 'WebAssembly', limit: 3 });
    console.log('Search:', JSON.stringify(searchResults, null, 2));

    const pageData = await jsonRpcRequest('wikipedia.page', { title: 'TypeScript' });
    console.log('\\nPage:', JSON.stringify(pageData, null, 2));
    
    const pageByIdData = await jsonRpcRequest('wikipedia.pageById', { id: 21721040 }); // Example ID for Node.js page
    console.log('\\nPage By ID:', JSON.stringify(pageByIdData, null, 2));

  } catch (error) {
      console.error('Error making JSON-RPC request:', error);
  }
}

main();
```