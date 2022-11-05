var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send({ 'name': 'test' }, 200)
});

router.post('/', function (req, res, next) {
    const { password, username } = req.body.values

    res.status(200).send({ success: true })
});

module.exports = router;