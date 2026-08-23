import { Router } from 'express';
import { createAll, createOne, getAll, updateOne } from './controller.ts';

const router = Router();

router.post('/create-one', createOne);
router.post('/create-all', createAll);
router.patch('/update-one/:id', updateOne);

router.get('/', getAll);

export default router;
