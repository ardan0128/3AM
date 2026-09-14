import { type NextFunction, type Request, type Response } from 'express';
import * as service from './service.ts';
import type { MemberParam } from './type.ts';
import type {
  CreateMemberRequest,
  CreateMembersRequest,
  CreateThemeRequest,
  UpdateMemberRequest,
} from './request.type.ts';

export async function createOne(
  req: Request<CreateMemberRequest>,
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
  req: Request<CreateMembersRequest>,
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
  req: Request<MemberParam, unknown, UpdateMemberRequest>,
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

export async function updateAll(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const updateMembers = await service.updateAll(req.body);

    res.status(200).json(updateMembers);
  } catch (error) {
    next(error);
  }
}

export async function getMembersAll(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const membersInfo = await service.getMembersAll();

    res.status(200).json(membersInfo);
  } catch (error) {
    next(error);
  }
}

export async function createTheme(
  req: Request<MemberParam, unknown, CreateThemeRequest>,
  res: Response,
  next: NextFunction,
) {
  try {
    const memberTheme = await service.createTheme(req.params.id, req.body);

    res.status(201).json(memberTheme);
  } catch (error) {
    next(error);
  }
}
