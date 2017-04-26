var express = require('express');
var router = express.Router();
var FeedPostController = require('./FeedPostController.js');

/*
 * GET
 */
router.get('/', FeedPostController.list);

/*
 * GET
 */
router.get('/:id', FeedPostController.show);

/*
 * POST
 */
router.post('/', FeedPostController.create);

/*
 * PUT
 */
router.put('/:id', FeedPostController.update);

/*
 * DELETE
 */
router.delete('/:id', FeedPostController.remove);

module.exports = router;
