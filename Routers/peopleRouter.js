import express from 'express';
import { getPersonById, searchPerson} from '../controllers/peopleController.js';

const router = express.Router();

router.get('/:id', getPersonById);  // Ruta para obtener persona por ID
router.get('/', searchPerson); // Ruta para buscar persona

export default router;