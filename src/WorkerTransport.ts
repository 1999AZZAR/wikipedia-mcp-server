import { Context } from 'hono';
import { Transport, JSONRPCMessage } from './transport.js';

/**
 * WorkerTransport implements Transport over Hono's context for Cloudflare Workers.
 */
export class WorkerTransport implements Transport {
  private c: Context;
  private messageSent = false; // Ensure response is sent only once

  public onmessage?: (message: JSONRPCMessage) => void;
  public onerror?: (error: Error) => void;
  public onclose?: () => void;

  constructor(c: Context) {
    this.c = c;
  }

  async start(): Promise<void> {
    // For stateless HTTP in Workers, the "connection" is per request.
    // The request body is already available via c.req.json() in the route handler.
    // This transport's primary role is sending the response.
    // The main logic of handling the request will be in JSONRPCServer.processRequest
    return Promise.resolve();
  }

  async send(message: JSONRPCMessage): Promise<Response> {
    if (this.messageSent) {
      console.warn('Attempted to send message after response was already sent:', message);
      // If a response was already prepared for c, return it.
      // Otherwise, construct a new error response.
      if (this.c.res) return this.c.res;
      return new Response(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'Response already sent but c.res was not available' }, id: message.id ?? null }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
    this.messageSent = true; // Set before c.json to avoid potential re-entrancy issues if c.json could trigger this path.
    // Hono's c.json() returns a Response and also sets c.res as a side effect.
    return this.c.json(message, 200); 
  }

  // Helper to send an error response, typically called by JSONRPCServer if it encounters an issue.
  // JSONRPCServer should construct the JSONRPCMessage error object itself.
  // This method is simplified as Hono will handle the actual response sending via c.json() in the route.
  // If JSONRPCServer calls this, it implies an error *before* a normal response can be formed.
  public sendError(error: Error, id?: string | number | null): Response {
    if (this.messageSent) {
        console.warn('Attempted to send error after response was already sent:', error);
        if (this.c.res) return this.c.res;
        return new Response(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'Response already sent (during sendError) but c.res was not available' }, id }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
    this.messageSent = true;
    return this.c.json({
        jsonrpc: '2.0',
        error: { code: -32000, message: error.message || 'Internal Server Error' },
        id: id === undefined ? null : id,
    }, 500);
  }

  async close(): Promise<void> {
    // For Workers, closing is handled by the runtime after the response is sent.
    // If onclose is defined, call it for any cleanup logic.
    if (this.onclose) {
      this.onclose();
    }
    return Promise.resolve();
  }
} 