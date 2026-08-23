import { asc, eq, inArray } from 'drizzle-orm';
import { db } from '../../db/index.ts';
import { member } from '../../db/schema/member.ts';
import type { Member, UpdateMember, UpdateMembers } from './type.ts';

export async function createOne(memberOne: Member) {
  const newMember = await db.insert(member).values(memberOne).returning();

  return newMember[0];
}

export async function createAll(members: Member[]) {
  const newMember = await db.insert(member).values(members).returning();

  return newMember;
}

export async function updateOne(updateMember: UpdateMember) {
  const updatedMember = await db
    .update(member)
    .set({ teamId: updateMember.teamId })
    .where(eq(member.id, updateMember.id))
    .returning();

  return updatedMember[0];
}

export async function updateAll(updateMembers: UpdateMembers) {
  const updateMember = await db
    .update(member)
    .set({ teamId: updateMembers.teamId })
    .where(inArray(member.teamId, updateMembers.members))
    .returning();

  return updateMember;
}

export async function getMembersByTeamId(teamId: string) {
  const membersInfo = await db
    .select()
    .from(member)
    .where(eq(member.teamId, teamId))
    .orderBy(asc(member.name));

  return membersInfo;
}
