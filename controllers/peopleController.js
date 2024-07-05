import axios from "axios";
import { config } from "dotenv";
config();

const TMDB_API_TOKEN = process.env.API_TOKEN;
const TMDB_API_URL = "https://api.themoviedb.org/3";

export const getPersonById = async (req, res) => {
    const { id } = req.params;
    const options = {
        method: "GET",
        url: `${TMDB_API_URL}/person/${id}?language=es-MX`,
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
}

export const searchPerson = async (req, res) => {
    const { query, language = "en-US", page = 1 , include_adult = false, } = req.query;
    const options = {
        method: "GET",      
        url: `${TMDB_API_URL}/search/person?query=${query}`,
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_API_TOKEN}`,
        },
        params: {
            language,
            page,
            include_adult,
        },
    };
    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {   
        handleError(error, res);
    }
}

const handleError = (error, res) => {
    if (error.response) {
      res.status(error.response.status).send(error.response.data.status_message);
    } else if (error.request) {
      res.status(500).send('No response received from TMDb');
    } else {
      res.status(500).send('Internal server error');
    }
  };