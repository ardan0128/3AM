import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const team = pgTable('teams', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
});
