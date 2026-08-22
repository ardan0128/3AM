import type { CreateMemberAllDto, CreateMemberOneDto } from './dto.ts';
import * as repository from './repository.ts';

export async function createOne(createMemberDto: CreateMemberOneDto) {
  const member = createMemberDto.member;
  const newMember = await repository.createOne(member);

  return newMember;
}

export async function createAll(createMemberAllDto: CreateMemberAllDto) {
  const newMember = await repository.createAll(createMemberAllDto.member);

  return newMember;
}
