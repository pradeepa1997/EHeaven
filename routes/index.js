var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EHeaven' });
});

router.post('/login', function (req, res) {
    res.render('login',{title: 'EHeaven' });
});

module.exports = router;
