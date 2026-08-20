import 'dotenv/config';
import { defineConfig, type Config } from 'drizzle-kit';

export default defineConfig({
	schema: './src/db/schema/*.ts',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		host: process.env.DATABASE_HOST,
		port: Number(process.env.DATABASE_PORT),
		database: process.env.DATABASE_NAME,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		ssl: false,
	},
} as Config);
