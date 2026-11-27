import { createPool } from '../src/config/database.js';

let pool;
try {
  pool = createPool();
  await pool.query('SELECT 1');
  console.log('PostgreSQL connection OK. No schema or data was changed.');
} catch (error) {
  console.error(`PostgreSQL connection failed: ${error.message}`);
  process.exitCode = 1;
} finally {
  await pool?.end();
}
