'use strict';

var express = require('express');
var controller = require('./project.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();


router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

router.post('/:name/contrib', controller.contribute);
//router.get('/:name/contrib/:amount', controller.contribute);


module.exports = router;