/* eslint-disable no-unused-vars */
const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose'); // /deals will all the database stuff
const bodyParser = require('body-parser');

const bob = express();
const port = process.env.PORT || 3000;
// const nitengenezeeRoute = express.Router();
const db = mongoose.connect('mongodb://localhost/bookAPI'); // { useNewUrlParser: true}  ///connecting to the  mongodb
const Book = require('./models/bookModel');
const Gari = require('./models/carModel');
const toBooks = require('./routes/bookRouter')(Book);
const toCars = require('./routes/carRouter')(Gari);

bob.use('/', toBooks); // localhost:5000/nitengenezeeRoute(/vitabu)
bob.use('/', toCars);
bob.use(bodyParser.urlencoded({ extended: true }));
bob.use(bodyParser.json());

bob.get('/', (req, res) => { // simple api
  res.send('grrrrrrrrr!');
});

bob.listen(port, () => {
  console.log(`on port ${chalk.yellow(port)}`);
});
