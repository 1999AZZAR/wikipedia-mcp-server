// Helpers for async route wrapping and centralized error handling
import { Request, Response, NextFunction } from 'express';

// Wrap async route handlers and forward errors to the error handler
export function wrapAsync(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}

// Centralized error handler middleware
export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = err.statusCode || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error', details: err.details || null });
}
