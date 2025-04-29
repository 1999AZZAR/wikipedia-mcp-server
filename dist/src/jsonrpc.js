"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONRPCServer = void 0;
class JSONRPCServer {
    constructor(transport) {
        this.handlers = {};
        this.transport = transport;
        this.transport.onmessage = this.handleMessage.bind(this);
        this.transport.onerror = (err) => console.error('Transport error', err);
        this.transport.onclose = () => console.log('Transport closed');
    }
    on(method, handler) {
        this.handlers[method] = handler;
    }
    async start() {
        await this.transport.start();
    }
    async handleMessage(msg) {
        if (msg.jsonrpc !== '2.0' || !msg.method)
            return;
        const handler = this.handlers[msg.method];
        const response = { jsonrpc: '2.0', id: msg.id };
        if (!handler) {
            response.error = { code: -32601, message: 'Method not found' };
            await this.transport.send(response);
            return;
        }
        try {
            const result = await handler(msg.params);
            response.result = result;
        }
        catch (err) {
            response.error = { code: -32000, message: err.message || String(err) };
        }
        await this.transport.send(response);
    }
}
exports.JSONRPCServer = JSONRPCServer;
