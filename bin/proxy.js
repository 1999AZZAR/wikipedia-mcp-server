#!/usr/bin/env node

const readline = require('readline');

const REMOTE_WORKER_URL = process.argv[2];

if (!REMOTE_WORKER_URL) {
  console.error('Error: Remote worker URL not provided.');
  console.error('Usage: node proxy.js <remote_worker_url>');
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let headers = {};
let contentLength = 0;

rl.on('line', (line) => {
  if (line.startsWith('Content-Length:')) {
    contentLength = parseInt(line.substring(15).trim(), 10);
    headers['Content-Length'] = contentLength;
  } else if (line === '') {
    // End of headers, start reading the body
    rl.input.read(contentLength);
  }
});

rl.input.on('readable', async () => {
    if (contentLength > 0) {
        const bodyBuffer = rl.input.read(contentLength);
        if (bodyBuffer) {
            const body = bodyBuffer.toString('utf-8');
            try {
                const request = JSON.parse(body);

                const response = await fetch(REMOTE_WORKER_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(request),
                });
                
                const responseJson = await response.json();
                const responseString = JSON.stringify(responseJson);
                const responseBuffer = Buffer.from(responseString, 'utf-8');
                
                // Write response with correct headers for the MCP client
                process.stdout.write(`Content-Length: ${responseBuffer.length}\r\n`);
                process.stdout.write('\r\n');
                process.stdout.write(responseBuffer);

            } catch (e) {
                console.error("Proxy Error:", e);
            } finally {
                // Reset for next message
                contentLength = 0;
                headers = {};
            }
        }
    }
}); 