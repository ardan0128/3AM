import { db } from '../../db/index.ts';
import { member } from '../../db/schema/member.ts';
import type { CreateMemberOneDto, MemberDto } from './dto.ts';

export async function createOne(memberDto: MemberDto) {
  const newMember = await db.insert(member).values(memberDto).returning();

  return newMember[0];
}

export async function createAll(memberDto: MemberDto[]) {
  const newMember = await db.insert(member).values(memberDto).returning();

  return newMember;
}
