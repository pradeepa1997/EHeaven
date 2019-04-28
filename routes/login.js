var express = require('express');
var router = express.Router();

/* GET login page */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'EHeaven' });
});

router.post('/users', function (req, res) {
    res.render('users',{title: 'EHeaven' });
});

module.exports = router;
  