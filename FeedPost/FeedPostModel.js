var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FeedPostSchema = new Schema({	'Date' : Date,	'User' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'Location' : String,	'Title' : String,	'Content' : String,	'Attachments' : Array,	'Comments' : Array,	'Likes' : Array});

module.exports = mongoose.model('FeedPost', FeedPostSchema);
