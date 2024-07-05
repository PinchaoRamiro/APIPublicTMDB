import axios from "axios";
import { config } from "dotenv";
config();

const TMDB_API_TOKEN = process.env.API_TOKEN;
const TMDB_API_URL = "https://api.themoviedb.org/3";

export const listTrending = async (req, res) => {
    const { type,} = req.params;
    const { time_window = "day"} = req.query;
    
    const options = {
        method: "GET",
        url: `${TMDB_API_URL}/trending/${type}/${time_window}?language=en-US`,
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

const handleError = (error, res) => {
    if (error.response) {
        res.status(error.response.status).send(error.response.data.status_message);
    } else if (error.request) {
        res.status(500).send("No response received from TMDb");
    } else {
        res.status(500).send("Internal server error");
    }
}