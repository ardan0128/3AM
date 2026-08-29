import type {
  CreateMember,
  CreateMembers,
  UpdateMemberRequest,
  UpdateMembersRequest,
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
  const updateMember: UpdateMemberRequest = { ...updateMemberRequest, id };
  const member = await repository.updateOne(updateMember);

  return member;
}

export async function getMembersByTeamId(teamId: string) {
  const membersInfo = await repository.getMembersByTeamId(teamId);

  return membersInfo;
}

export async function updateAll(updateMembersRequest: UpdateMembersRequest) {
  const membersInfo = await Promise.all(
    updateMembersRequest.members.map((member) => repository.updateOne(member)),
  );

  return membersInfo;
}

export async function getMembersAll() {
  const membersInfo = await repository.getMembersAll();

  return membersInfo;
}
