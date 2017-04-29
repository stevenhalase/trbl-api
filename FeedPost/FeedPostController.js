var FeedPostModel = require('./FeedPostModel.js');

/**
 * FeedPostController.js
 *
 * @description :: Server-side logic for managing FeedPosts.
 */
module.exports = {

    /**
     * FeedPostController.list()
     */
    list: function (req, res) {
        FeedPostModel.find(function (err, FeedPosts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting FeedPost.',
                    error: err
                });
            }
            return res.json(FeedPosts);
        });
    },

    /**
     * FeedPostController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        FeedPostModel.findOne({_id: id}, function (err, FeedPost) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting FeedPost.',
                    error: err
                });
            }
            if (!FeedPost) {
                return res.status(404).json({
                    message: 'No such FeedPost'
                });
            }
            return res.json(FeedPost);
        });
    },

    /**
     * FeedPostController.create()
     */
    create: function (req, res) {
        console.log(req.body)
        var FeedPost = new FeedPostModel({
          Date : req.body.Date,
          User : req.body.User,
          Location : {
            Latitude : req.body.Location.Latitude,
            Longitude : req.body.Location.Longitude,
            City : req.body.Location.City,
            State : req.body.Location.State
          },
          Title : req.body.Title,
          Content : req.body.Content,
          Attachments : req.body.Attachments,
          Comments : req.body.Comments,
          Likes : req.body.Likes
        });

        FeedPost.save(function (err, FeedPost) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating FeedPost',
                    error: err
                });
            }
            return res.status(201).json(FeedPost);
        });
    },

    /**
     * FeedPostController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        FeedPostModel.findOne({_id: id}, function (err, FeedPost) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting FeedPost',
                    error: err
                });
            }
            if (!FeedPost) {
                return res.status(404).json({
                    message: 'No such FeedPost'
                });
            }

            FeedPost.Date = req.body.Date ? req.body.Date : FeedPost.Date;
            FeedPost.User = req.body.User ? req.body.User : FeedPost.User;
            FeedPost.Location.Latitude = req.body.Location.Latitude ? req.body.Location.Latitude : FeedPost.Location.Latitude;
            FeedPost.Location.Longitude = req.body.Location.Longitude ? req.body.Location.Longitude : FeedPost.Location.Longitude;
            FeedPost.Location.City = req.body.Location.City ? req.body.Location.City : FeedPost.Location.City;
            FeedPost.Location.State = req.body.Location.State ? req.body.Location.State : User.Location.State;
            FeedPost.Title = req.body.Title ? req.body.Title : FeedPost.Title;
            FeedPost.Content = req.body.Content ? req.body.Content : FeedPost.Content;
            FeedPost.Attachments = req.body.Attachments ? req.body.Attachments : FeedPost.Attachments;
            FeedPost.Comments = req.body.Comments ? req.body.Comments : FeedPost.Comments;
            FeedPost.Likes = req.body.Likes ? req.body.Likes : FeedPost.Likes;
			
            FeedPost.save(function (err, FeedPost) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating FeedPost.',
                        error: err
                    });
                }

                return res.json(FeedPost);
            });
        });
    },

    /**
     * FeedPostController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        FeedPostModel.findByIdAndRemove(id, function (err, FeedPost) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the FeedPost.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
