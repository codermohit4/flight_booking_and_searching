const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const { PORT } = require('./config/serverconfig');

const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  // Middleware to parse JSON and URL-encoded bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
};

setupAndStartServer();
