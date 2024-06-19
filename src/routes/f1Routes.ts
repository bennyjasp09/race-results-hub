import { Router } from 'express';
import { getAllResults } from '../controllers/f1Controller';

const router = Router();

router.get('/', getAllResults);

export default router;
