const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const blogRoute = require('./routes/blogRoute');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1', blogRoute);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'client', 'build', 'index.html'),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
}

app.get('/', (req, res) => {
  res.send('Home');
});

// DB connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {})
  .catch((err) => console.log(err));

// Listen
app.listen(process.env.PORT || 5000, () => {
  console.log(`Node server is up and running on port ${process.env.PORT}`);
});
