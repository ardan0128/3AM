import { defineRelations } from 'drizzle-orm';
import { member } from './member.ts';
import { memberTheme } from './member-theme.ts';

export const relations = defineRelations({ member, memberTheme }, (r) => ({
  member: {
    memberTheme: r.one.memberTheme({
      from: r.member.id,
      to: r.memberTheme.id,
    }),
  },
}));
