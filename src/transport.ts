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

// StdioTransport class removed as it's for Node.js environment and causes build errors in Cloudflare Worker.
// The interfaces JSONRPCMessage and Transport above are still used and kept.
