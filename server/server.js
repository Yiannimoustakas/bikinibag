const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./models'); //created model loading here
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

dotenv.config();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGO_URI,{
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    autoIndex: false,
    useUnifiedTopology: true
  }
).catch((err) => {
  console.log('Mongoose error:', err);
  return err;
});

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

const port = process.env.PORT || 3000;

app.listen(port);


console.log('Bikinibag RESTful API server started on: ' + port);
