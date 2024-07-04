// controllers/moviesController.js
import axios from "axios";

const TMDB_API_TOKEN = process.env.API_TOKEN;
const TMDB_API_URL = "https://api.themoviedb.org/3";

export const getMovieById = async (req, res) => {
  const { id } = req.params;

  const options = {
    method: "GET",
    url: `${TMDB_API_URL}/movie/${id}?language=es-MX`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_TOKEN}`,
    },
  };

  try {
    axios.request(options).then(function (response) {
      res.json(response.data);
    });
  } catch (error) {
    res.status(400).send("Bad request");
    res.status(500).send("Internal server error");
  }
};

export const listMovies = async (req, res) => {
  const { page = 1, region, language = "es-MX", query, genre } = req.query;

  try {
    const params = {
      api_key: TMDB_API_KEY,
      language,
      page,
    };

    if (region) params.region = region;
    if (query) params.query = query;
    if (genre) params.with_genres = genre;

    const response = await axios.get(`${TMDB_API_URL}/discover/movie`, {
      params,
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
