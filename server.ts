import { Request, Response } from 'express';

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// routes
import userRoutes from './routes/api/users';

const app = express();

//middleware
app.use(bodyParser.json());

const db = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

//mongo connect
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB conected'))
  .catch((err: any) => console.log(err));

// Use Routes
app.use('/user', userRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
