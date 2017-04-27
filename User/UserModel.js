var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	'Alias' : String,
	'FirstName' : String,
	'LastName' : String,
	'Age' : Number,
	'BirthDate' : Date,
	'Location' : {
    'Latitude' : Number,
    'Longitude' : Number,
    'City' : String,
    'State' : String
  },
	'ProfileImage' : String,
	'CoverImage' : String,
  'Auth0Id': String
});

module.exports = mongoose.model('User', UserSchema);
