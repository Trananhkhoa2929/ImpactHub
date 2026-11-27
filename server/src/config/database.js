import pg from 'pg';
import { env } from './env.js';

// Lazy creation: running the empty API does not require a database yet.
export function createPool() {
  if (!env.databaseUrl) {
    throw new Error('Set DATABASE_URL in server/.env before connecting to PostgreSQL.');
  }
  return new pg.Pool({
    connectionString: env.databaseUrl,
    max: 5,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 10000,
  });
}
