import { Router } from 'express';
import { createAll, createOne, updateAll, updateOne } from './controller.ts';
import { getMembersByTeamId } from './service.ts';

const router = Router();

router.post('/create-one', createOne);
router.post('/create-all', createAll);

router.put('/update-all', updateAll);

router.patch('/update-one/:id', updateOne);

router.get('/get/members/:teamId', getMembersByTeamId);

export default router;
