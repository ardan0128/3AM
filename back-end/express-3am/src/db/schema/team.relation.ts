import { defineRelations } from 'drizzle-orm';
import { team } from './team.ts';
import { member } from './member.ts';

export const relations = defineRelations({ member, team }, (r) => ({
  member: {
    author: r.one.team({
      from: r.member.teamId,
      to: r.team.id,
    }),
  },
  team: {
    member: r.many.member(),
  },
}));
