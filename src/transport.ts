export interface JSONRPCMessage {
  jsonrpc: '2.0';
  method?: string;
  params?: any;
  result?: any;
  id?: string | number;
  error?: any;
}

export interface Transport {
  start(): Promise<void>;
  send(message: JSONRPCMessage): Promise<void>;
  close(): Promise<void>;
  onclose?: () => void;
  onerror?: (error: Error) => void;
  onmessage?: (message: JSONRPCMessage) => void;
}

/**
 * StdioTransport implements Transport over process stdio (newline-delimited JSON).
 */
export class StdioTransport implements Transport {
  public onmessage?: (message: JSONRPCMessage) => void;
  public onerror?: (error: Error) => void;
  public onclose?: () => void;

  async start(): Promise<void> {
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk: string) => {
      const lines = chunk.split(/\r?\n/).filter(line => line.trim());
      for (const line of lines) {
        try {
          const msg = JSON.parse(line);
          this.onmessage?.(msg);
        } catch (err) {
          this.onerror?.(err instanceof Error ? err : new Error(String(err)));
        }
      }
    });
    process.stdin.on('end', () => this.onclose && this.onclose());
  }

  async send(message: JSONRPCMessage): Promise<void> {
    const text = JSON.stringify(message);
    process.stdout.write(text + '\n');
  }

  async close(): Promise<void> {
    process.stdin.pause();
    process.stdout.end();
    this.onclose && this.onclose();
  }
}
