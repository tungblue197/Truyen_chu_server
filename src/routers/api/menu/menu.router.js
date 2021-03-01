const router = require('express').Router();
const menu = require('../../../controllers/menu/menu.controler');


router.get('/menu', menu.get)

module.exports = router;
