import { Context } from 'hono';
import { SSEStreamingApi, sse } from 'hono/streaming';
import { Transport, JSONRPCMessage } from './transport';

/**
 * SseTransport implements Transport over Server-Sent Events.
 */
export class SseTransport implements Transport {
  private c: Context;
  private sseStreamingApi!: SSEStreamingApi; // Will be initialized in start
  private MOCK_CONNECTION_ID = 'mock_ssee_connection_id'; // Placeholder

  public onmessage?: (message: JSONRPCMessage) => void;
  public onerror?: (error: Error) => void;
  public onclose?: () => void;

  constructor(c: Context) {
    this.c = c;
  }

  async start(): Promise<void> {
    // The actual SSE stream is typically initiated by the Hono route handler.
    // This method could be used to confirm readiness or perform initial setup.
    // For now, we assume the Hono sse() helper will establish the stream.
    // We need a way to get the SSEStreamingApi instance here.
    console.log('[SseTransport] Started');
    // This is a conceptual issue: The SSEStreamingApi is usually within the sse() handler's scope.
    // We will need to pass it in or handle it differently.
    // For now, we will assume it gets set by the route handler.
  }

  // This method will be called by the route handler to provide the SSE API
  public setSseStreamingApi(api: SSEStreamingApi): void {
    this.sseStreamingApi = api;
  }

  async send(message: JSONRPCMessage): Promise<Response> {
    if (!this.sseStreamingApi) {
      console.error('[SseTransport] SSEStreamingApi not initialized. Cannot send message.');
      // Cannot directly return a Response here in the same way as HTTP transport
      // as the primary response is the SSE stream itself.
      // This indicates a flow error.
      throw new Error('SSE channel not ready for sending.');
    }

    try {
      await this.sseStreamingApi.writeSSE({
        data: JSON.stringify(message),
        event: 'jsonrpc', // MCP might define a specific event name
        id: this.MOCK_CONNECTION_ID, // MCP might use this for message IDs or connection IDs
      });
      console.log('[SseTransport] Message sent over SSE:', message);
      // For SSE, the primary "Response" is the stream itself.
      // A successful write to the stream doesn't map directly to returning a new HTTP Response object here.
      // This function signature (Promise<Response>) from the Transport interface might need rethinking for SSE.
      // For now, we'll assume the stream response is handled by Hono and return a conceptual success.
      // This part of the Transport interface might not fit perfectly for a pure SSE transport.
      return new Response(null, { status: 200 }); // Placeholder, actual response is the stream.
    } catch (e: any) {
      console.error('[SseTransport] Error writing to SSE stream:', e);
      this.onerror?.(e);
      // Similar to above, error handling for SSE is different.
      throw e; // Re-throw for higher-level handling if necessary.
    }
  }

  async close(): Promise<void> {
    if (this.sseStreamingApi) {
      try {
        this.sseStreamingApi.close();
        console.log('[SseTransport] SSE stream closed.');
      } catch (e) {
        console.error('[SseTransport] Error closing SSE stream:', e)
      }
    }
    this.onclose?.();
  }

  // Placeholder for receiving messages.
  // In a true bi-directional SSE, client would send events that this transport listens to.
  // Or, client sends a POST, and this transport is used for the *response* path.
  public mockReceiveMessage(message: JSONRPCMessage) {
    console.log('[SseTransport] Mock message received (to be processed by onmessage):', message);
    this.onmessage?.(message);
  }
} 