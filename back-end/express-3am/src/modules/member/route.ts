import { Router } from 'express';
import { createAll, createOne, getAll } from './controller.ts';

const router = Router();

router.post('/create-one', createOne);
router.post('/create-all', createAll);
router.get('/', getAll);

export default router;
