import { sql } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { member } from './member.ts';

export const memberTheme = pgTable('member_themes', {
  id: uuid('id')
    .default(sql`uuidv7()`)
    .primaryKey()
    .references(() => member.id, { onDelete: 'cascade' }),
  mainColor: varchar('main_color', { length: 7 }),
  shade1: varchar('shade1', { length: 7 }),
  shade2: varchar('shade2', { length: 7 }),
  shade3: varchar('shade3', { length: 7 }),
  shade4: varchar('shade4', { length: 7 }),

  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
