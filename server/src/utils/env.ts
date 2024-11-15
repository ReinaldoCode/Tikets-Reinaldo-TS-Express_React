import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),
  USERPG: z.string(),
  HOST: z.string(),
  DATABASE: z.string(),
  JWT_SECRET: z.string(),
  JWT_EXPIRATION: z.string(),
  PASSWORD: z.string(),
  DATA_BASE_PORT: z.string(),
});

type Env = z.infer<typeof envSchema>;
export const ENV: Env = envSchema.parse(process.env);
