import { Context } from 'hono';
import { Transport, JSONRPCMessage } from './transport';

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

  async send(message: JSONRPCMessage): Promise<void> {
    if (this.messageSent) {
      console.warn('Attempted to send message after response was already sent:', message);
      return;
    }
    // Hono's c.json() handles setting headers and sending the response.
    this.c.json(message, 200);
    this.messageSent = true;
  }

  // Helper to send an error response, typically called by JSONRPCServer if it encounters an issue.
  // JSONRPCServer should construct the JSONRPCMessage error object itself.
  // This method is simplified as Hono will handle the actual response sending via c.json() in the route.
  // If JSONRPCServer calls this, it implies an error *before* a normal response can be formed.
  public sendError(error: Error, id?: string | number | null): void {
    if (this.messageSent) {
        console.warn('Attempted to send error after response was already sent:', error);
        return;
    }
    console.error('WorkerTransport sendError invoked:', error);
    this.c.json({
        jsonrpc: '2.0',
        error: { code: -32000, message: error.message || 'Internal Server Error' },
        id: id === undefined ? null : id,
    }, 500); // Consider if JSON-RPC errors should always be 200 or if transport-level errors can be 500
    this.messageSent = true;
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