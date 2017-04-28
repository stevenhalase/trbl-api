const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var uristring = process.env.MONGODB_URI || 'mongodb://localhost/trbl';

mongoose.connect(uristring, error => {
  if (error) { console.error(error); } 
  else {
      console.log('Mongoose connected successfully')
  }
})

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

app.listen(port, function () {
  console.log('App listening on: http://localhost:8080')
})