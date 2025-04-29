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
