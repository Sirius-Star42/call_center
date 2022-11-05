var express = require('express');
var router = express.Router();
const a = require('../models/index')

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send({'name': 'test'}, 200)
	// res.render('index', { title: 'Express' });
});

module.exports = router;
