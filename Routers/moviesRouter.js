// routers/moviesRouter.js
import express from 'express';
import { getMovieById, listMovies } from '../controllers/moviesController.js';

const router = express.Router();

router.get('/:id', getMovieById);  // Ruta para obtener película por ID
router.get('/', listMovies);  // Ruta para obtener listado de pelúculas

export default router;
