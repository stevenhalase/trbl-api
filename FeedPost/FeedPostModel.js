var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FeedPostSchema = new Schema({

module.exports = mongoose.model('FeedPost', FeedPostSchema);