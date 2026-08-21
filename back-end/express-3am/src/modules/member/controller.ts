import { type NextFunction, type Request, type Response } from 'express';
import * as service from './service.ts';

export async function createOne(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { name } = req.body;
    const newMember = await service.createOne(name);

    res.status(201).json(newMember);
  } catch (error) {
    next(error);
  }
}

export function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ message: 'Get all members' });
  } catch (error) {
    next(error);
  }
}
