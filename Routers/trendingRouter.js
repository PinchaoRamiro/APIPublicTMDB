import express from 'express';
import { listTrending } from '../controllers/trendingController.js';

const router = express.Router();

router.get('/trending/:type', listTrending);

export default router;