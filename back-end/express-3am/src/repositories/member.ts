import { db } from '../db/index.ts';
import { member } from '../db/schema/member.ts';

export const memberRepository = {
  findAll: () => {
    return db.select().from(member);
  },
};
