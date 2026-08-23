import type { NextFunction, Request, Response } from 'express';
import * as service from './services.ts';
import type { TeamParam } from './type.ts';

export async function createTeam(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const newTeam = await service.createTeam(req.body);

    res.status(201).json(newTeam);
  } catch (error) {
    next(error);
  }
}

export async function getTeamById(
  req: Request<TeamParam>,
  res: Response,
  next: NextFunction,
) {
  try {
    const team = await service.getTeamById(req.params.id);

    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
}
