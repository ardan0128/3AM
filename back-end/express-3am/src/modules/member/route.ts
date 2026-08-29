import { Router } from 'express';
import {
  createAll,
  createOne,
  getMembersAll,
  updateAll,
  updateOne,
} from './controller.ts';
import { getMembersByTeamId } from './controller.ts';

const router = Router();

router.post('/member', createOne);
router.post('/members', createAll);

router.put('/members', updateAll);

router.patch('/member/:id', updateOne);

router.get('/members/:teamId', getMembersByTeamId);
router.get('/members', getMembersAll);

export default router;
