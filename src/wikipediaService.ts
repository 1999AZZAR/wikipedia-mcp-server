import fetch from 'node-fetch';
import LRUCache from 'lru-cache';
import { CACHE_MAX, CACHE_TTL } from './config'; // Assuming config.ts is still relevant for these

// Type definition for search results (can be shared or defined here)
export type WikiSearchResult = {
  title: string;
  snippet: string;
  pageid: number;
};

// Cache instance
// Note: In a Cloudflare Worker, global variables are reset between requests on the free tier.
// For persistent caching across requests and scaled workers, consider KV Store or Caches API.
// For now, this LRU cache will work per-instance/per-request effectively, or for short-lived in-memory needs.
const cache = new LRUCache<string, any>({ max: CACHE_MAX, ttl: CACHE_TTL });

// Fetches search results from Wikipedia
export async function wikiSearch(query: string, limit: number, lang: string, offset: number): Promise<any> {
  const key = `search:${lang}:${query}:${limit}:${offset}`;
  if (cache.has(key)) {
    console.log(`Cache hit for: ${key}`)
    return cache.get(key);
  }
  console.log(`Cache miss for: ${key}, fetching from API...`)
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&srlimit=${limit}&sroffset=${offset}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Wikipedia API error for search: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  cache.set(key, data);
  return data;
}

// Fetches a Wikipedia page by its title
export async function wikiPage(title: string, lang: string): Promise<any> {
  const key = `page:${lang}:${title}`;
  if (cache.has(key)) {
    console.log(`Cache hit for: ${key}`)
    return cache.get(key);
  }
  console.log(`Cache miss for: ${key}, fetching from API...`)
  const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&format=json&prop=text|sections`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Wikipedia API error for page: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  cache.set(key, data);
  return data;
}

// Fetches a Wikipedia page by its numeric page ID
export async function wikiPageById(id: number, lang: string): Promise<any> {
  const key = `pageById:${lang}:${id}`;
  if (cache.has(key)) {
    console.log(`Cache hit for: ${key}`)
    return cache.get(key);
  }
  console.log(`Cache miss for: ${key}, fetching from API...`)
  const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&pageid=${id}&format=json&prop=text|sections`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Wikipedia API error for pageById: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  cache.set(key, data);
  return data;
} 