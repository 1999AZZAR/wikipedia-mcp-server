#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/transport/stdio');

const REMOTE_WORKER_URL = process.argv[2];

if (!REMOTE_WORKER_URL) {
  console.error('Error: Remote worker URL not provided.');
  console.error('Usage: node proxy.js <remote_worker_url>');
  process.exit(1);
}

async function main() {
  const server = new Server({ name: 'wikipedia-proxy', version: '1.0.0' });

  server.fallbackRequestHandler = async (request) => {
    try {
      const response = await fetch(REMOTE_WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Proxy error response from remote: ${errorText}`);
        throw new Error(`Remote server returned error: ${response.status} ${response.statusText}`);
      }

      const jsonResponse = await response.json();
      
      if (jsonResponse.error) {
        throw jsonResponse.error;
      }

      return jsonResponse.result;

    } catch (error) {
      console.error('Error in proxy request handler:', error);
      throw error;
    }
  };
  
  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  console.error('Wikipedia MCP proxy started. Listening on stdio.');
}

main().catch(err => {
  console.error('Proxy server crashed:', err);
  process.exit(1);
}); 