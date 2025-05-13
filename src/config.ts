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
  // For Cloudflare Workers, process.exit(1) is not appropriate.
  // Errors should be thrown or handled to prevent the worker from starting incorrectly.
  // Consider throwing an error here or logging and letting the worker fail on startup if config is critical.
  // For now, we'll log and use defaults as per schema if parsing fails (though safeParse implies it shouldn't reach here with defaults).
  // However, if process.env provides unparseable values without defaults, it would fail.
  // A robust solution would be to throw an error here to halt worker initialization if config is invalid.
  throw new Error('Invalid environment configuration: ' + parsed.error.format());
}

export const {
  PORT,
  CACHE_MAX,
  CACHE_TTL,
  RATE_LIMIT_WINDOW,
  RATE_LIMIT_MAX,
  ALLOWED_ORIGINS,
} = parsed.data;

// Removed the redundant cacheConfigSchema and associated logic for CACHE_MAX and CACHE_TTL
// The envSchema above already handles these, including defaults and parsing from process.env.

// Note: For a cleaner Worker integration, these config values would typically be passed 
// from the worker.ts (where they can be accessed via `c.env.VAR_NAME`)
// down to the wikipediaService.ts, rather than being imported directly from a config file
// that tries to read process.env. This current setup relies on wrangler to populate
// process.env from .dev.vars during local development, or for Cloudflare to provide them.
