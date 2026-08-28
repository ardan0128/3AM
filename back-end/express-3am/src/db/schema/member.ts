import { sql } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { team } from './team.ts';

export const member = pgTable('members', {
  id: uuid('id')
    .default(sql`uuidv7()`)
    .primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  mainColor: varchar('main_color', { length: 7 }),
  subColor: varchar('sub_color', { length: 7 }),
  chzzkId: varchar('chzzk_id', { length: 255 }),
  youtubeHandle: varchar('youtube_handle', { length: 255 }),
  naverCafe: varchar('naver_cafe', { length: 255 }),
  xId: varchar('x_id', { length: 255 }),

  teamId: uuid('team_id').references(() => team.id),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
