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
        var FeedPost = new FeedPostModel({
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