import { db } from '../../db/index.ts';
import { team } from '../../db/schema/team.ts';

export async function createOne(name: string) {
  const newTeam = await db.insert(team).values({ name }).returning();

  return newTeam[0];
}
