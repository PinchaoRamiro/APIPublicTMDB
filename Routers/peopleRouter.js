import express from 'express';
import { getPersonById, searchPerson} from '../controllers/peopleController.js';

const router = express.Router();

router.get('/people/:id', getPersonById);  // Ruta para obtener persona por ID
router.get('/people/', searchPerson); // Ruta para buscar persona

export default router;