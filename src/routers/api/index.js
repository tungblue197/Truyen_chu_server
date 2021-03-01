const router = require('express').Router();

const menu = require('./menu/menu.router');
router.use('/', menu);


module.exports = router;