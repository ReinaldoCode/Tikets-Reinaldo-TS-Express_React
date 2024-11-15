import pg from 'pg';
import { ENV } from '../utils/env';
const { Pool } = pg;

export const pool = new Pool({
  user: ENV.USERPG,
  host: ENV.HOST,
  database: ENV.DATABASE,
  password: ENV.PASSWORD,
  port: parseInt(ENV.DATA_BASE_PORT),
});
