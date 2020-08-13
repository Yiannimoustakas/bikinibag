'use strict';

var express = require('express');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var User = require('./models'); //created model loading here
var bodyParser = require('body-parser');
var dotenv = require('dotenv');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

dotenv.config();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
}).catch(function (err) {
  console.log('Mongoose error:', err);
  return err;
});

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Bikinibag RESTful API server started on: ' + port);
//# sourceMappingURL=server.js.map