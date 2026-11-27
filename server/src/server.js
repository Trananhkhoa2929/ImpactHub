import { app } from './app.js';
import { env } from './config/env.js';

const server = app.listen(env.port, () => {
  console.log(`ImpactHub API: http://localhost:${env.port}`);
});
server.on('error', (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
