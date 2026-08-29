import type { CorsOptions } from 'cors';

const origins = process.env.CORS_ORIGINS?.split(',') ?? [];

export const corsOptions: CorsOptions = {
  origin: origins,
};
