import { type NextFunction, type Request, type Response } from 'express';
import * as service from './service.ts';
import type { MemberParam, UpdateMemberRequest } from './type.ts';

export async function createOne(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const newMember = await service.createOne(req.body);

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
    const newMember = await service.createAll(req.body);

    res.status(201).json(newMember);
  } catch (error) {
    next(error);
  }
}

export async function updateOne(
  req: Request<MemberParam, any, UpdateMemberRequest>,
  res: Response,
  next: NextFunction,
) {
  try {
    const updatedMember = await service.updateOne(req.params.id, req.body);

    res.status(200).json(updatedMember);
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
