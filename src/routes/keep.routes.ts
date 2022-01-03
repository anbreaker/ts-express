import { Router } from 'express';
import { getGreetings } from '../controllers/keep.controller';

const router = Router();

// /api/
router.get('/', getGreetings);

export default router;
