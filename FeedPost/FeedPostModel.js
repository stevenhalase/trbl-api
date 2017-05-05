var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FeedPostSchema = new Schema({
	'Date' : Date,
	'User' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'Location' : {
    'Latitude' : Number,
    'Longitude' : Number,
    'City' : String,
    'State' : String
  },
	'Title' : String,
	'Content' : String,
	'Attachments' : Array,
	'Comments' : [{
    'User': {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    'Date': Date,
    'Content': String,
    'Likes': Array,
    'Replies': [{
      'User': {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      'Date': Date,
      'Content': String,
      'Likes' : Array
    }]
  }],
	'Likes' : Array
});

module.exports = mongoose.model('FeedPost', FeedPostSchema);
