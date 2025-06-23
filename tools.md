# Wikipedia MCP Server - Available Tools

This document details all the tools (methods) available through the Wikipedia MCP Server's JSON-RPC 2.0 API.

## Overview

The Wikipedia MCP Server exposes three main tools for interacting with Wikipedia:

1. **`wikipedia.search`** - Search for Wikipedia articles
2. **`wikipedia.page`** - Retrieve a Wikipedia page by title
3. **`wikipedia.pageById`** - Retrieve a Wikipedia page by numeric ID

All tools follow the JSON-RPC 2.0 specification and are accessed via the `/mcp` endpoint.

## Base Request Format

All requests must follow the JSON-RPC 2.0 format:

```json
{
  "jsonrpc": "2.0",
  "method": "<tool_name>",
  "params": {
    // Tool-specific parameters
  },
  "id": "<unique_request_id>"
}
```

## Tools Reference

### 1. wikipedia.search

Search for Wikipedia articles using a query string.

#### Parameters

| Parameter | Type     | Required | Default | Validation | Description |
|-----------|----------|----------|---------|------------|-------------|
| `query`   | string   | ✅ Yes    | -       | Min 1 char | The search query string |
| `limit`   | number   | ❌ No     | 10      | 1-50, integer | Maximum number of results to return |
| `lang`    | string   | ❌ No     | "en"    | Language code (e.g., "en", "es", "fr") | Wikipedia language edition |
| `offset`  | number   | ❌ No     | 0       | Non-negative integer | Number of results to skip (pagination) |

#### Example Request

```json
{
  "jsonrpc": "2.0",
  "method": "wikipedia.search",
  "params": {
    "query": "artificial intelligence",
    "limit": 5,
    "lang": "en",
    "offset": 0
  },
  "id": "search-123"
}
```

#### Response Format

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "title": "Artificial intelligence",
      "snippet": "Artificial intelligence (AI) is intelligence demonstrated by machines...",
      "pageid": 1266637
    }
    // ... more results
  ],
  "id": "search-123"
}
```

#### Return Type

Array of search result objects, each containing:
- `title` (string): Article title
- `snippet` (string): Brief excerpt from the article
- `pageid` (number): Unique Wikipedia page identifier

---

### 2. wikipedia.page

Retrieve the full content of a Wikipedia page by its title.

#### Parameters

| Parameter | Type   | Required | Default | Validation | Description |
|-----------|--------|----------|---------|------------|-------------|
| `title`   | string | ✅ Yes    | -       | Min 1 char | The exact title of the Wikipedia page |
| `lang`    | string | ❌ No     | "en"    | Language code (e.g., "en", "es", "fr") | Wikipedia language edition |

#### Example Request

```json
{
  "jsonrpc": "2.0",
  "method": "wikipedia.page",
  "params": {
    "title": "Machine learning",
    "lang": "en"
  },
  "id": "page-456"
}
```

#### Response Format

```json
{
  "jsonrpc": "2.0",
  "result": {
    "title": "Machine learning",
    "pageid": 233488,
    "text": {
      "*": "<div>HTML content of the page...</div>"
    },
    "sections": [
      {
        "toclevel": 1,
        "level": "2",
        "line": "Overview",
        "number": "1",
        "index": "1"
      }
      // ... more sections
    ]
  },
  "id": "page-456"
}
```

#### Return Type

Page object containing:
- `title` (string): Page title
- `pageid` (number): Unique page identifier
- `text` (object): HTML content of the page
- `sections` (array): Table of contents with section information

Returns `null` if the page is not found.

---

### 3. wikipedia.pageById

Retrieve the full content of a Wikipedia page by its numeric page ID.

#### Parameters

| Parameter | Type   | Required | Default | Validation | Description |
|-----------|--------|----------|---------|------------|-------------|
| `id`      | number | ✅ Yes    | -       | Positive integer | The numeric Wikipedia page ID |
| `lang`    | string | ❌ No     | "en"    | Language code (e.g., "en", "es", "fr") | Wikipedia language edition |

#### Example Request

```json
{
  "jsonrpc": "2.0",
  "method": "wikipedia.pageById",
  "params": {
    "id": 233488,
    "lang": "en"
  },
  "id": "pageid-789"
}
```

#### Response Format

```json
{
  "jsonrpc": "2.0",
  "result": {
    "title": "Machine learning",
    "pageid": 233488,
    "text": {
      "*": "<div>HTML content of the page...</div>"
    },
    "sections": [
      {
        "toclevel": 1,
        "level": "2",
        "line": "Overview",
        "number": "1",
        "index": "1"
      }
      // ... more sections
    ]
  },
  "id": "pageid-789"
}
```

#### Return Type

Same as `wikipedia.page` - returns a page object or `null` if not found.

---

## Error Handling

The server returns standard JSON-RPC 2.0 error responses for various error conditions:

### Common Error Codes

| Code   | Message | Description |
|--------|---------|-------------|
| -32700 | Parse error | Invalid JSON in request |
| -32600 | Invalid Request | Malformed JSON-RPC request |
| -32601 | Method not found | Unknown method name |
| -32602 | Invalid params | Parameter validation failed |
| -32603 | Internal error | Server-side error (e.g., Wikipedia API failure) |
| -32000 | Server error | Application-specific error |

### Example Error Response

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32602,
    "message": "Invalid parameters for wikipedia.search: query must be at least 1 character"
  },
  "id": "search-123"
}
```

## Language Support

All tools support different Wikipedia language editions through the `lang` parameter:

- **English**: `"en"` (default)
- **Spanish**: `"es"`
- **French**: `"fr"`
- **German**: `"de"`
- **Japanese**: `"ja"`
- **And many more...**

The language code should follow the ISO 639-1 standard (two lowercase letters).

## Caching

The server implements an LRU (Least Recently Used) cache to improve performance:

- **Cache Key Format**: `{method}:{lang}:{query/title/id}:{additional_params}`
- **Default TTL**: 5 minutes
- **Default Max Entries**: 100 entries per worker instance
- **Cache Scope**: Per Cloudflare Worker instance

Cache configuration can be customized via environment variables:
- `CACHE_MAX`: Maximum number of cached entries
- `CACHE_TTL`: Time-to-live in milliseconds

## Rate Limiting

The server respects Wikipedia's API rate limits and terms of service. For high-volume usage, consider:

1. Implementing client-side caching
2. Using appropriate `limit` parameters to avoid over-fetching
3. Implementing exponential backoff for retry logic

## Integration Examples

### Using cURL

```bash
curl -X POST https://your-worker.workers.dev/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "wikipedia.search",
    "params": {"query": "TypeScript", "limit": 3},
    "id": "test-1"
  }'
```

### Using JavaScript/TypeScript

```typescript
async function searchWikipedia(query: string, limit = 5) {
  const response = await fetch('https://your-worker.workers.dev/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'wikipedia.search',
      params: { query, limit },
      id: Date.now().toString()
    })
  });
  
  const result = await response.json();
  return result.result;
}
```

### Using Python

```python
import requests
import json

def search_wikipedia(query, limit=5):
    payload = {
        "jsonrpc": "2.0",
        "method": "wikipedia.search",
        "params": {"query": query, "limit": limit},
        "id": "python-request"
    }
    
    response = requests.post(
        'https://your-worker.workers.dev/mcp',
        headers={'Content-Type': 'application/json'},
        data=json.dumps(payload)
    )
    
    return response.json()['result']
```

## Additional Notes

- All tools are stateless and can be called independently
- The server automatically handles URL encoding for Wikipedia API requests
- HTML content in page responses includes Wikipedia's formatting and links
- Section information provides a table of contents structure for long articles
- Page IDs are unique across all Wikipedia language editions 