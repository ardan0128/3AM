import { asc, DrizzleQueryError, eq, inArray } from 'drizzle-orm';
import { db } from '../../db/index.ts';
import { member } from '../../db/schema/member.ts';
import { memberTheme } from '../../db/schema/member-theme.ts';
import type { Member, MemberTheme, UpdateMemberRequest } from './type.ts';
import { DatabaseError } from 'pg';

export async function createOne(memberOne: Member) {
  const newMember = await db.insert(member).values(memberOne).returning();

  return newMember[0];
}

export async function createAll(members: Member[]) {
  const newMember = await db.insert(member).values(members).returning();

  return newMember;
}

export async function updateOne(updateMemberRequest: UpdateMemberRequest) {
  const { id, teamId, ...updateData } = updateMemberRequest;
  const updatedMember = await db
    .update(member)
    .set(updateData)
    .where(eq(member.id, id))
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

export async function getMembersAll() {
  const membersInfo = await db.select().from(member).orderBy(asc(member.name));

  return membersInfo;
}

export async function createTheme(theme: MemberTheme) {
  const createdTheme = await db
    .insert(memberTheme)
    .values(theme)
    .onConflictDoUpdate({ target: memberTheme.id, set: { ...theme } })
    .returning();

  return createdTheme[0];
}
