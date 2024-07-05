// controllers/moviesController.js
import axios from "axios";
import { config } from "dotenv";

config();


const TMDB_API_TOKEN = process.env.API_TOKEN;
const TMDB_API_URL = "https://api.themoviedb.org/3";

export const getMovieById = async (req, res) => {
  const { id } = req.params;

  const options = {
    method: 'GET',
    url: `${TMDB_API_URL}/movie/${id}?language=es-MX`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_TOKEN}`
    }
  };
  try{
    axios.request(options)
    .then(function (response) {
      res.json(response.data);
    })
  }
  catch(error){
    res.status(500).send("Internal server error");
    res.status(400).send("Bad request");
    res.status(404).send("Not found");
    res.status(401).send("Unauthorized");
    res.status(403).send("Forbidden");
  }

};

export const listMovies = async (req, res) => {
  const { language = 'en-US', page = 1, genre, region, query } = req.query;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_TOKEN}`,
    },
  };

  try {
    if (query) {
      // Construcción de la URL para la búsqueda
      options.url = `${TMDB_API_URL}/search/movie`;
      options.params = {
        query,
        include_adult: false,
        language,
        page,
      };
    } else {
      // Construcción de la URL para la búsqueda con filtros
      options.url = `${TMDB_API_URL}/discover/movie`;
      options.params = {
        language,
        page,
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
      };

      if (genre) options.params.with_genres = genre;
      if (region) options.params.region = region;
    }

    // Solicitud a la API de TMDb
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    handleError(error, res);
  }
};

// Función para manejar errores
const handleError = (error, res) => {
  if (error.response) {
    res.status(error.response.status).send(error.response.data.status_message);
  } else if (error.request) {
    res.status(500).send('No response received from TMDb');
  } else {
    res.status(500).send('Internal server error');
  }
};
