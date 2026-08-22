import { type NextFunction, type Request, type Response } from 'express';
import * as service from './service.ts';
import type { CreateMemberAllDto, CreateMemberOneDto } from './dto.ts';

export async function createOne(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const body = req.body as CreateMemberOneDto;
    const newMember = await service.createOne(body);

    res.status(201).json(newMember);
  } catch (error) {
    next(error);
  }
}

export async function createAll(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const body = req.body as CreateMemberAllDto;
    const newMember = await service.createAll(body);

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
