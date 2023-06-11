const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ success: true });
});

// DB connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Node server is up and running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
