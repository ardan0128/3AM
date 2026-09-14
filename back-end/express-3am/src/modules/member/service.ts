import type { MemberTheme } from './type.ts';
import * as repository from './repository.ts';
import type {
  CreateMemberRequest,
  CreateMembersRequest,
  CreateThemeRequest,
  UpdateMemberRequest,
  UpdateMembersRequest,
} from './request.type.ts';

export async function createOne(createMember: CreateMemberRequest) {
  const newMember = await repository.createOne(createMember);

  return newMember;
}

export async function createAll(createMembers: CreateMembersRequest) {
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

export async function updateAll(updateMembersRequest: UpdateMembersRequest) {
  const membersInfo = await Promise.all(
    updateMembersRequest.members.map((member) =>
      repository.updateOne({ ...member }),
    ),
  );

  return membersInfo;
}

export async function getMembersAll() {
  const membersInfo = await repository.getMembersAll();

  return membersInfo;
}

export async function createTheme(
  id: string,
  createThemeRequest: CreateThemeRequest,
) {
  const memberTheme: MemberTheme = { ...createThemeRequest, id };
  const themeInfo = await repository.createTheme(memberTheme);

  return themeInfo;
}
