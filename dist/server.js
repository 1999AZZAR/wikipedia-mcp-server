"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const lru_cache_1 = __importDefault(require("lru-cache"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const cache = new lru_cache_1.default({ max: 100, ttl: 1000 * 60 * 5 }); // 5m TTL
async function wikiSearch(query, limit) {
    const key = `search:${query}:${limit}`;
    if (cache.has(key))
        return cache.get(key);
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&srlimit=${limit}`;
    const res = await (0, node_fetch_1.default)(url);
    const data = await res.json();
    cache.set(key, data);
    return data;
}
async function wikiPage(title) {
    const key = `page:${title}`;
    if (cache.has(key))
        return cache.get(key);
    const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&format=json&prop=text|sections`;
    const res = await (0, node_fetch_1.default)(url);
    const data = await res.json();
    cache.set(key, data);
    return data;
}
app.get('/search', async (req, res) => {
    const q = String(req.query.q || '');
    const limit = Number(req.query.limit) || 10;
    const filter = String(req.query.filter || '').toLowerCase();
    if (!q)
        return res.status(400).json({ error: 'Missing query parameter q' });
    try {
        const data = await wikiSearch(q, limit);
        let results = data.query.search;
        if (filter) {
            results = results.filter(r => r.title.toLowerCase().includes(filter));
        }
        res.json({ results });
    }
    catch (err) {
        res.status(500).json({ error: 'Search failed', details: err });
    }
});
app.get('/page/:title', async (req, res) => {
    const title = String(req.params.title);
    try {
        const data = await wikiPage(title);
        res.json({ page: data.parse });
    }
    catch (err) {
        res.status(500).json({ error: 'Page fetch failed', details: err });
    }
});
app.listen(port, () => console.log(`Wikipedia MCP server listening at http://localhost:${port}`));
