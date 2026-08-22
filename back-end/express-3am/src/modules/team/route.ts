import { Router } from 'express';
import { createOne } from './controller.ts';

const router = Router();

router.post('/', createOne);

export default router;
