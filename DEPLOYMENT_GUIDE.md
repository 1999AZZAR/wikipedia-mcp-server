# Enhanced Wikipedia MCP Server - Deployment Guide

This guide covers deploying the enhanced Wikipedia MCP Server with all resilience, monitoring, and extended features.

## 🚀 Quick Start

### 1. Prerequisites

- Node.js 18+ 
- Wrangler CLI (`npm install -g wrangler`)
- Cloudflare account with Workers plan
- KV namespace for persistent caching (optional but recommended)

### 2. Environment Setup

```bash
# Clone and install dependencies
git clone <your-repo>
cd wikipedia-mcp-server
npm install

# Login to Cloudflare
wrangler login

# Create KV namespace for caching (recommended)
wrangler kv:namespace create "WIKI_CACHE"
wrangler kv:namespace create "WIKI_CACHE" --preview
```

### 3. Configuration

Update `wrangler.toml` with your KV namespace IDs:

```toml
[[kv_namespaces]]
binding = "WIKI_CACHE"
id = "your-actual-kv-namespace-id"
preview_id = "your-preview-kv-namespace-id"
```

Create `.dev.vars` for local development:

```env
CACHE_MAX=200
CACHE_TTL=300000
DEFAULT_LANGUAGE=en
ENABLE_DEDUPLICATION=true
LOG_LEVEL=debug
ENABLE_METRICS=true
```

### 4. Deploy

```bash
# Build and deploy
npm run build
npm run deploy

# Test the deployment
curl https://your-worker.your-subdomain.workers.dev/health
```

## 🔧 Configuration Options

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `CACHE_MAX` | 100 | Maximum number of cache entries |
| `CACHE_TTL` | 300000 | Cache TTL in milliseconds (5 mins) |
| `DEFAULT_LANGUAGE` | "en" | Default Wikipedia language |
| `ENABLE_DEDUPLICATION` | false | Enable request deduplication |
| `LOG_LEVEL` | "info" | Logging level (debug/info/warn/error) |
| `ENABLE_METRICS` | true | Enable metrics collection |

### Production Recommendations

- **CACHE_MAX**: 500-1000 for production
- **CACHE_TTL**: 600000 (10 minutes) for production
- **ENABLE_DEDUPLICATION**: true for high-traffic environments
- **LOG_LEVEL**: "info" for production, "debug" for development

## 🛡️ Resilience Features

### Circuit Breaker Configuration

The system automatically handles:
- **Failure Threshold**: 3 failures trigger circuit open
- **Reset Timeout**: 30 seconds before retry
- **Endpoint Failover**: Automatic switching between Wikipedia mirrors

### Retry Logic

- **Max Retries**: 3 attempts
- **Base Delay**: 1 second
- **Max Delay**: 8 seconds
- **Backoff**: Exponential (2x multiplier)

### Caching Strategy

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Memory Cache  │ -> │   KV Storage    │ -> │ Wikipedia API   │
│   (Fast, Temp)  │    │ (Persistent)    │    │   (Fallback)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📊 Monitoring & Observability

### Health Check Endpoint

```bash
GET /health
```

Response:
```json
{
  "status": "healthy|degraded|unhealthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "wikipedia": {
    "endpoints": [...],
    "cache": {...}
  },
  "monitoring": {
    "requestRate": 10,
    "errorRate": 0.01,
    "avgResponseTime": 150
  }
}
```

### Metrics Dashboard

```bash
GET /metrics
```

Provides comprehensive analytics:
- Request rates and error rates
- Popular queries and languages
- Performance metrics
- Cache hit ratios

### Available Methods

```bash
GET /methods
```

Lists all available JSON-RPC methods.

## 🔌 New API Methods

### Core Methods (Enhanced)

```json
// Enhanced search with snippets
{
  "jsonrpc": "2.0",
  "method": "wikipedia.search",
  "params": {
    "query": "artificial intelligence",
    "limit": 10,
    "lang": "en",
    "includeSnippets": true
  },
  "id": "1"
}

// Enhanced page retrieval
{
  "jsonrpc": "2.0",
  "method": "wikipedia.page",
  "params": {
    "title": "Machine Learning",
    "lang": "en",
    "sections": true,
    "images": true,
    "links": true,
    "categories": true
  },
  "id": "2"
}
```

### Extended Methods

```json
// Page summaries
{
  "jsonrpc": "2.0",
  "method": "wikipedia.summary",
  "params": { "title": "Python", "lang": "en" },
  "id": "3"
}

// Random articles
{
  "jsonrpc": "2.0",
  "method": "wikipedia.random",
  "params": { "lang": "en" },
  "id": "4"
}

// Batch operations
{
  "jsonrpc": "2.0",
  "method": "wikipedia.batchSearch",
  "params": {
    "queries": ["AI", "ML", "NLP"],
    "lang": "en",
    "limit": 5
  },
  "id": "5"
}

// Related articles
{
  "jsonrpc": "2.0",
  "method": "wikipedia.related",
  "params": {
    "title": "Artificial Intelligence",
    "method": "links",
    "limit": 10
  },
  "id": "6"
}

// Geographic search
{
  "jsonrpc": "2.0",
  "method": "wikipedia.searchNearby",
  "params": {
    "lat": 40.7128,
    "lon": -74.0060,
    "radius": 5000,
    "limit": 10
  },
  "id": "7"
}

// Trending articles
{
  "jsonrpc": "2.0",
  "method": "wikipedia.trending",
  "params": {
    "lang": "en",
    "date": "2024/01/01"
  },
  "id": "8"
}
```

## 🔒 Security Considerations

### Rate Limiting

Consider implementing rate limiting for production:

```toml
# In wrangler.toml
[[services]]
binding = "RATE_LIMITER"
service = "your-rate-limiter-worker"
```

### Input Validation

All methods include comprehensive Zod validation:
- Query length limits
- Coordinate range validation
- Language code validation
- Batch size restrictions

### CORS Headers

Add CORS support if needed:

```typescript
app.use('*', cors({
  origin: ['https://your-allowed-domain.com'],
  allowMethods: ['POST', 'GET'],
  allowHeaders: ['Content-Type']
}));
```

## 📈 Performance Optimization

### Cache Optimization

1. **Memory Cache**: Fast, temporary storage
2. **KV Storage**: Persistent across deployments
3. **Smart TTLs**: Different expiration for different content types

### Request Optimization

1. **Deduplication**: Prevents duplicate concurrent requests
2. **Batching**: Process multiple requests efficiently
3. **Compression**: Automatic response compression

### Monitoring Performance

Key metrics to watch:
- Cache hit ratio (aim for >80%)
- Average response time (<500ms)
- Error rate (<5%)
- Wikipedia API availability

## 🚨 Troubleshooting

### Common Issues

1. **High Error Rate**
   - Check Wikipedia API status
   - Verify network connectivity
   - Review circuit breaker status

2. **Slow Response Times**
   - Increase cache size
   - Check KV namespace configuration
   - Monitor Wikipedia API latency

3. **Cache Issues**
   - Verify KV namespace binding
   - Check cache configuration
   - Monitor cache hit ratios

### Debug Mode

Enable debug logging:
```env
LOG_LEVEL=debug
```

### Health Check Failures

Common causes:
- Wikipedia API unavailable
- KV namespace issues
- Worker memory limits exceeded

## 🔄 Maintenance

### Regular Tasks

1. **Monitor Metrics**: Check /metrics endpoint regularly
2. **Review Logs**: Monitor error patterns
3. **Update Dependencies**: Keep packages current
4. **Cache Cleanup**: KV storage auto-expires

### Scaling Considerations

- **Worker Limits**: 128MB memory, 30s execution time
- **KV Limits**: 25MB per value, 10M requests/month free tier
- **Request Volume**: Monitor and optimize for your traffic patterns

## 📞 Support

For issues:
1. Check `/health` endpoint
2. Review `/metrics` for patterns
3. Enable debug logging
4. Check Cloudflare Worker logs in dashboard 