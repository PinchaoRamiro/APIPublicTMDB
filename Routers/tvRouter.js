import express from 'express';
import { getTvById, listTv } from '../controllers/tvController.js';

const router = express.Router();

router.get('/:id', getTvById);  // Ruta para obtener serie por ID
router.get('/', listTv); // Ruta para obtener lista de series

export default router;