const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const blogRoute = require('./routes/blogRoute');
const cors = require('cors')

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/v1', blogRoute);

// DB connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Node server is up and running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
