import * as repository from './repository.ts';

export async function createOne(name: string) {
  const newMember = await repository.createOne(name);

  return newMember;
}
