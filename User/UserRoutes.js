var express = require('express');
var router = express.Router();
var UserController = require('./UserController.js');

/*
 * GET
 */
router.get('/', UserController.list);

/*
 * GET
 */
router.get('/location/', UserController.listByLocation);

/*
 * GET
 */
router.get('/:id', UserController.show);

/*
 * GET
 */
router.get('/id/:id', UserController.getById);

/*
 * POST
 */
router.post('/', UserController.create);

/*
 * PUT
 */
router.put('/:id', UserController.update);

/*
 * DELETE
 */
router.delete('/:id', UserController.remove);

module.exports = router;
