// app.js
console.clear();
import express from 'express';
import dotenv from 'dotenv';

import moviesRouter from './Routers/moviesRouter.js';
import peopleRouter from './Routers/peopleRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/movies', moviesRouter);
app.use('/api/people', peopleRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



