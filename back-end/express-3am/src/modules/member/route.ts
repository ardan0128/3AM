import { Router } from 'express';
import { createOne, getAll } from './controller.ts';

const router = Router();

router.post('/', createOne);
router.get('/', getAll);

export default router;
