import axios from "axios";
import { config } from "dotenv";
config();

const TMDB_API_TOKEN = process.env.API_TOKEN;
const TMDB_API_URL = "https://api.themoviedb.org/3";

export const getTvById = async (req, res) => {
    const { id } = req.params;
    const options = {
        method: "GET",  
        url: `${TMDB_API_URL}/tv/${id}?language=es-MX`,
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_API_TOKEN}`,
        },
    };
    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        handleError(error, res);
    }
};

export const listTv = async (req, res) => {
    const { language = 'en-US', page = 1, genre, region, query } = req.query;
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_TOKEN}`,
      },
      params: {
        language,
        page,
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
      },
    };
  
    try {
      if (query) {
        // Construcción de la URL para la búsqueda de series
        options.url = `${TMDB_API_URL}/search/tv`;
        options.params.query = query;
      } else {
        // Construcción de la URL para listar series populares con filtros
        options.url = `${TMDB_API_URL}/discover/tv`;
        if (genre) options.params.with_genres = genre;
        if (region) options.params.with_original_language = region;
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