import { Router } from 'express';
import {
  createAll,
  createOne,
  createTheme,
  getMembersAll,
  updateAll,
  updateOne,
} from './controller.ts';
import { getMembersByTeamId } from './controller.ts';

const router = Router();

router.post('/member', createOne);
router.patch('/member/:id', updateOne);
router.post('/member/:id/theme', createTheme);

router.get('/members/:teamId', getMembersByTeamId);
router.get('/members', getMembersAll);
router.post('/members', createAll);
router.put('/members', updateAll);

export default router;
