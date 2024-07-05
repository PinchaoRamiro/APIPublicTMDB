// Importaciones necesarias para configurar y ejecutar el servidor
console.clear(); // Limpia la consola al iniciar el servidor
import express from 'express'; // Importa el framework Express para crear el servidor
import dotenv from 'dotenv'; // Importa dotenv para cargar variables de entorno desde un archivo .env

// Importa los enrutadores personalizados para cada tipo de recurso
import moviesRouter from './Routers/moviesRouter.js'; // Enrutador para las rutas relacionadas con películas
import peopleRouter from './Routers/peopleRouter.js'; // Enrutador para las rutas relacionadas con personas
import tvRouter from './Routers/tvRouter.js'; // Enrutador para las rutas relacionadas con series de televisión
import trendingRouter from './Routers/trendingRouter.js'; // Enrutador para las rutas relacionadas con contenido trending

// Carga las variables de entorno desde un archivo .env si existe
dotenv.config();

// Crea una instancia de la aplicación Express
const app = express();

// Configura el puerto del servidor, utiliza el puerto especificado en las variables de entorno o el puerto 3000 por defecto
const port = process.env.PORT || 3000;

// Middleware para interpretar el cuerpo de las solicitudes como objetos JSON
app.use(express.json());

// Middleware para enrutar las solicitudes a los enrutadores específicos según la ruta base
app.use('/api/movies', moviesRouter); // Rutas relacionadas con películas
app.use('/api/people', peopleRouter); // Rutas relacionadas con personas
app.use('/api/tv', tvRouter); // Rutas relacionadas con series de televisión
app.use('/api/trending', trendingRouter); // Rutas relacionadas con contenido trending

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Muestra un mensaje en la consola cuando el servidor se inicia correctamente
});




