import { eq } from 'drizzle-orm';
import { db } from '../../db/index.ts';
import { team } from '../../db/schema/team.ts';
import type { CreateTeamRequest, UpdateTeamRequest } from './type.ts';

export async function createTeam(createTeamRequest: CreateTeamRequest) {
  const newTeam = await db.insert(team).values(createTeamRequest).returning();

  return newTeam[0];
}

export async function updateTeam(updateTeamRequest: UpdateTeamRequest) {
  const teamInfo = await db
    .update(team)
    .set({})
    .where(eq(team.id, updateTeamRequest.id));

  return teamInfo;
}

export async function getTeamById(id: string) {
  const teamInfo = await db.select().from(team).where(eq(team.id, id));

  return teamInfo;
}

export async function getTeamMembersById(id: string) {
  const teamInfo = await db.query.team.findMany({
    where: {
      id,
    },
    with: {
      member: true,
    },
  });

  return teamInfo;
}
