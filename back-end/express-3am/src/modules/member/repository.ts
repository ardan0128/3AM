import { db } from '../../db/index.ts';
import { member } from '../../db/schema/member.ts';

export async function createOne(name: string) {
  const newMember = await db.insert(member).values({ name }).returning();

  return newMember[0];
}
