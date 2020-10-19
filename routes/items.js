var express = require('express');
var router = express.Router();

var item_controller = require('../controllers/itemController');

router.get('/', item_controller.item_list);

router.post('/', item_controller.create_item);

router.post('/:id', item_controller.delete_item)
// this should be a delete not a post

module.exports = router;