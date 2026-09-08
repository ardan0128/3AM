import { sql } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const memberTheme = pgTable('member_themes', {
  id: uuid('id')
    .default(sql`uuidv7()`)
    .primaryKey(),
  mainColor: varchar('main_color', { length: 7 }),

  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
