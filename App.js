// app.js
console.clear();
import express from 'express';
import dotenv from 'dotenv';

import moviesRouter from './Routers/moviesRouter.js';
import peopleRouter from './Routers/peopleRouter.js';
import tvRouter from './Routers/tvRouter.js';
import trendingRouter from './Routers/trendingRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/movies', moviesRouter);
app.use('/api/people', peopleRouter);
app.use('/api/tv', tvRouter);
app.use('/api/trending', trendingRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



