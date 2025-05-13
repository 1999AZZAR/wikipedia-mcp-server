import LRUCache from 'lru-cache';

// Type definition for search results (can be shared or defined here)
export type WikiSearchResult = {
  title: string;
  snippet: string;
  pageid: number;
};

// Fetches search results from Wikipedia
// Accepts an LRUCache instance as a parameter
export async function wikiSearch(
  query: string, 
  limit: number, 
  lang: string, 
  offset: number, 
  cache: LRUCache<string, any> | null // Allow null if caching is disabled or not yet initialized
): Promise<any> {
  const key = `search:${lang}:${query}:${limit}:${offset}`;
  if (cache?.has(key)) {
    console.log(`Cache hit for: ${key}`)
    return cache.get(key);
  }
  console.log(`Cache miss for: ${key}, fetching from API...`)
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&srlimit=${limit}&sroffset=${offset}`;
  // Use global fetch provided by Cloudflare Workers environment
  const res = await fetch(url);
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Wikipedia API error for search: ${res.status} ${errorText}`);
    throw new Error(`Wikipedia API error for search: ${res.status} ${errorText}`);
  }
  const data = await res.json();
  if (cache) {
    cache.set(key, data);
  }
  return data;
}

// Fetches a Wikipedia page by its title
// Accepts an LRUCache instance as a parameter
export async function wikiPage(
  title: string, 
  lang: string, 
  cache: LRUCache<string, any> | null
): Promise<any> {
  const key = `page:${lang}:${title}`;
  if (cache?.has(key)) {
    console.log(`Cache hit for: ${key}`)
    return cache.get(key);
  }
  console.log(`Cache miss for: ${key}, fetching from API...`)
  const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&format=json&prop=text|sections`;
  // Use global fetch
  const res = await fetch(url);
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Wikipedia API error for page: ${res.status} ${errorText}`);
    throw new Error(`Wikipedia API error for page: ${res.status} ${errorText}`);
  }
  const data = await res.json();
  if (cache) {
    cache.set(key, data);
  }
  return data;
}

// Fetches a Wikipedia page by its numeric page ID
// Accepts an LRUCache instance as a parameter
export async function wikiPageById(
  id: number, 
  lang: string,
  cache: LRUCache<string, any> | null
): Promise<any> {
  const key = `pageById:${lang}:${id}`;
  if (cache?.has(key)) {
    console.log(`Cache hit for: ${key}`)
    return cache.get(key);
  }
  console.log(`Cache miss for: ${key}, fetching from API...`)
  const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&pageid=${id}&format=json&prop=text|sections`;
  // Use global fetch
  const res = await fetch(url);
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Wikipedia API error for pageById: ${res.status} ${errorText}`);
    throw new Error(`Wikipedia API error for pageById: ${res.status} ${errorText}`);
  }
  const data = await res.json();
  if (cache) {
    cache.set(key, data);
  }
  return data;
}

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