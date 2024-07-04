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
  const { language = "en-US", page = 1, genre, region, query } = req.query;
  console.log(query);

  if (query){
    searchMoviesQuery(query);
  } else{
    try {
      const params = {
        language,
        page,
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
      };
  
      if (genre) params.with_genres = genre;
      if (region) params.region = region;
      if (query) params.query = query;
  
      const options = {
        method: 'GET',
        url: `${TMDB_API_URL}/discover/movie`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TMDB_API_TOKEN}`
        },
        params
      };
  
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).send(error.response.data.status_message);
      } else if (error.request) {
        res.status(500).send('No response received from TMDb');
      } else {
        res.status(500).send('Internal server error');
      }
    }
  }

  
};

const searchMoviesQuery(query) => {
  try{

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie?query=the%20matrix&include_adult=false',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFjNzRhYTc3YjMxNWY2NjE1YzExNTY5MTFlZTE3OSIsIm5iZiI6MTcyMDEyNjg4OC42Mzg4NjIsInN1YiI6IjY2N2NjMGFmNjhiMjdmYzJlYmI5MWVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6jdQDzAJ3-yGTPYexe_KvnBg1vESm7X-EYw--qygzB4'
  }
};

axios
  .request(options)
  .then(function (response) {
    res.json(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  }
}