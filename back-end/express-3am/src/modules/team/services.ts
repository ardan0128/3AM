import * as repository from './repositoriy.ts';
import * as memberService from '../member/service.ts';
import type { CreateTeamRequest, UpdateTeamMemberRequest } from './type.ts';

export async function createTeam(createTeamRequest: CreateTeamRequest) {
  const newTeam = await repository.createTeam(createTeamRequest);

  return newTeam;
}

export async function getTeamById(id: string) {
  const team = await repository.getTeamById(id);

  return team;
}
