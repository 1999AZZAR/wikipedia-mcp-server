"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StdioTransport = void 0;
/**
 * StdioTransport implements Transport over process stdio (newline-delimited JSON).
 */
class StdioTransport {
    async start() {
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (chunk) => {
            const lines = chunk.split(/\r?\n/).filter(line => line.trim());
            for (const line of lines) {
                try {
                    const msg = JSON.parse(line);
                    this.onmessage?.(msg);
                }
                catch (err) {
                    this.onerror?.(err instanceof Error ? err : new Error(String(err)));
                }
            }
        });
        process.stdin.on('end', () => this.onclose && this.onclose());
    }
    async send(message) {
        const text = JSON.stringify(message);
        process.stdout.write(text + '\n');
    }
    async close() {
        process.stdin.pause();
        process.stdout.end();
        this.onclose && this.onclose();
    }
}
exports.StdioTransport = StdioTransport;
