const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trbl');

const users = require('./User/UserRoutes');
const feedposts = require('./FeedPost/FeedPostRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use('/users', users);
app.use('/feedposts', feedposts);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('App listening on: http://localhost:8080')
})