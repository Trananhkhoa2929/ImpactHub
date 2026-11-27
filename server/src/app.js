import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';

export const app = express();
app.disable('x-powered-by');
app.use(cors({ origin: env.clientOrigin }));
app.use(express.json());

// Process liveness only; this does not check the database or external services.
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.use((_req, res) => res.status(404).json({ message: 'Route not found' }));
app.use((error, _req, res, _next) => {
  console.error(error);
  const status = error.status === 400 ? 400 : 500;
  res.status(status).json({ message: status === 400 ? 'Invalid request body' : 'Internal server error' });
});
