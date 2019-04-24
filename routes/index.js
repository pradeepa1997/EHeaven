var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EHeaven' });
});
router.post('/users', function (req, res) {
    res.render('users',{title: 'EHeaven' });
});
module.exports = router;
