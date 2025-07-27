var express = require('express');
var router = express.Router();

/* GET home page. */
const home = require('../controllers/main');

router.get('/', home.index);


module.exports = router;
