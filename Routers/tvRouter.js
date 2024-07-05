import express from 'express';
import { getTvById, listTv } from '../controllers/tvController.js';

const router = express.Router();

router.get('/tv/:id', getTvById);  // Ruta para obtener serie por ID
router.get('/tv/', listTv); // Ruta para obtener lista de series

export default router;