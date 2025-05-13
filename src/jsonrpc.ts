import { Transport, JSONRPCMessage } from './transport';

export class JSONRPCServer {
  private transport: Transport;
  private handlers: Record<string, (params: any) => Promise<any>> = {};

  constructor(transport: Transport) {
    this.transport = transport;
    this.transport.onmessage = this.handleMessage.bind(this);
    this.transport.onerror = (err: Error) => console.error('Transport error', err);
    this.transport.onclose = () => console.log('Transport closed');
  }

  public on(method: string, handler: (params: any) => Promise<any>) {
    this.handlers[method] = handler;
  }

  public async start(): Promise<void> {
    await this.transport.start();
  }

  public async processRequest(requestBody: any): Promise<void> {
    if (!requestBody || typeof requestBody !== 'object' || requestBody === null) {
      const errorResponse: JSONRPCMessage = {
        jsonrpc: '2.0',
        error: { code: -32600, message: 'Invalid Request: body must be a JSON object.' },
        id: (requestBody && typeof requestBody.id !== 'undefined') ? requestBody.id : null,
      };
      await this.transport.send(errorResponse);
      return;
    }

    await this.handleMessage(requestBody as JSONRPCMessage);
  }

  private async handleMessage(msg: JSONRPCMessage) {
    if (msg.jsonrpc !== '2.0' || !msg.method) return;
    const handler = this.handlers[msg.method];
    const response: JSONRPCMessage = { jsonrpc: '2.0', id: msg.id };
    if (!handler) {
      response.error = { code: -32601, message: 'Method not found' };
      await this.transport.send(response);
      return;
    }
    try {
      const result = await handler(msg.params);
      response.result = result;
    } catch (err: any) {
      response.error = { code: -32000, message: err.message || String(err) };
    }
    await this.transport.send(response);
  }
}
