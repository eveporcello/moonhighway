var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'API - Under construction'});
});

module.exports = router;
