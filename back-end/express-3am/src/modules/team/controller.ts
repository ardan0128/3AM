import type { NextFunction, Request, Response } from 'express';
import * as service from './services.ts';

export async function createOne(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { name } = req.body;
    const newTeam = await service.createOne(name);

    res.status(201).json(newTeam);
  } catch (error) {
    next(error);
  }
}
