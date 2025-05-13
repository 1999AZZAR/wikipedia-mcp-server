import { z } from 'zod';

// Validate and parse environment variables
const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(3000),
  CACHE_MAX: z.coerce.number().int().positive().default(100),
  CACHE_TTL: z.coerce.number().int().nonnegative().default(300000),
  RATE_LIMIT_WINDOW: z.coerce.number().int().positive().default(60000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(100),
  // Comma-separated CORS allowed origins; blank allows all
  ALLOWED_ORIGINS: z.string().default('').transform(val => val.split(',').map(s => s.trim()).filter(Boolean)),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error('❌ Invalid configuration:', parsed.error.format());
  process.exit(1);
}

export const {
  PORT,
  CACHE_MAX,
  CACHE_TTL,
  RATE_LIMIT_WINDOW,
  RATE_LIMIT_MAX,
  ALLOWED_ORIGINS,
} = parsed.data;

// Define a schema for cache configuration, primarily for parsing and defaults.
// In a Worker, these would ideally come from bindings (env vars).
const cacheConfigSchema = z.object({
  CACHE_MAX: z.coerce.number().int().positive().default(100),
  CACHE_TTL: z.coerce.number().int().nonnegative().default(300000), // 5 minutes
});

// Attempt to parse from process.env for local dev if .env is loaded by a higher level (e.g. if dotenv is still used somewhere)
// or provide defaults. For Workers, c.env.VAR_NAME is the standard way.
// For now, we just provide defaults directly here as wikipediaService.ts imports these directly.
const config = cacheConfigSchema.safeParse({
  CACHE_MAX: process.env.CACHE_MAX, 
  CACHE_TTL: process.env.CACHE_TTL,
});

if (!config.success) {
  console.warn('⚠️ Could not parse cache config from process.env, using defaults:', config.error.format());
  // Fallback to pure defaults if parsing process.env (even if undefined) fails zod validation with defaults.
  // This ensures CACHE_MAX and CACHE_TTL are always valid numbers.
  const defaults = cacheConfigSchema.parse({}); 
  _CACHE_MAX = defaults.CACHE_MAX;
  _CACHE_TTL = defaults.CACHE_TTL;
} else {
  _CACHE_MAX = config.data.CACHE_MAX;
  _CACHE_TTL = config.data.CACHE_TTL;
}

export const CACHE_MAX = _CACHE_MAX;
export const CACHE_TTL = _CACHE_TTL;

// Note: For a cleaner Worker integration, these config values would typically be passed 
// from the worker.ts (where they can be accessed via `c.env.CACHE_MAX`)
// down to the wikipediaService.ts, rather than being imported directly from a config file
// that tries to read process.env.
