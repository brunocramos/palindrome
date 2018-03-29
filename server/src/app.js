const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const routes = require('./routes');

const app = express();

const init = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  routes(app);
  return app;
};

module.exports = init;
