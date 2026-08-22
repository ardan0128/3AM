import * as repository from './repositoriy.ts';

export async function createOne(name: string) {
  const newTeam = await repository.createOne(name);

  return newTeam;
}
