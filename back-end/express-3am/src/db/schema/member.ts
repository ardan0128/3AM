import { sql } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { team } from './team.ts';

export const member = pgTable('members', {
  id: uuid('id')
    .default(sql`uuidv7()`)
    .primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  teamId: uuid('team_id').references(() => team.id),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
