import type {
  CreateMember,
  CreateMembers,
  UpdateMember,
  UpdateMemberRequest,
} from './type.ts';
import * as repository from './repository.ts';

export async function createOne(createMember: CreateMember) {
  const newMember = await repository.createOne(createMember.member);

  return newMember;
}

export async function createAll(createMembers: CreateMembers) {
  const newMember = await repository.createAll(createMembers.members);

  return newMember;
}

export async function updateOne(
  id: string,
  updateMemberRequest: UpdateMemberRequest,
) {
  const updateMember: UpdateMember = { id, ...updateMemberRequest };
  const member = await repository.updateOne(updateMember);

  return member;
}

export async function updateAll(teamId: string, updateMember) {}
