import { defineRelationsPart } from 'drizzle-orm';
import { member } from './member.ts';
import { memberTheme } from './member-theme.ts';

export const memberRelations = defineRelationsPart(
  { member, memberTheme },
  (r) => ({
    member: {
      theme: r.one.memberTheme({
        from: r.member.id,
        to: r.memberTheme.id,
      }),
    },

    memberTheme: {
      member: r.one.member({
        from: r.memberTheme.id,
        to: r.member.id,
      }),
    },
  }),
);
