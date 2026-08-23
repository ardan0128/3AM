import { Router } from 'express';
import { createTeam, getTeamById } from './controller.ts';

const router = Router();

router.post('/create', createTeam);
router.get('/get/:id', getTeamById);

export default router;
