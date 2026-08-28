import { asc, eq, inArray } from 'drizzle-orm';
import { db } from '../../db/index.ts';
import { member } from '../../db/schema/member.ts';
import type { Member, UpdateMemberRequest } from './type.ts';

export async function createOne(memberOne: Member) {
  const newMember = await db.insert(member).values(memberOne).returning();

  return newMember[0];
}

export async function createAll(members: Member[]) {
  const newMember = await db.insert(member).values(members).returning();

  return newMember;
}

export async function updateOne(updateMember: UpdateMemberRequest) {
  const updatedMember = await db
    .update(member)
    .set({ ...updateMember })
    .where(eq(member.id, updateMember.id))
    .returning();

  return updatedMember[0];
}

export async function getMembersByTeamId(teamId: string) {
  const membersInfo = await db
    .select()
    .from(member)
    .where(eq(member.teamId, teamId))
    .orderBy(asc(member.name));

  return membersInfo;
}
