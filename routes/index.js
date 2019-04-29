var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//var connection = require('../config/connection');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'eheaven_test'
});
connection.connect(function (error) {
    if(error){
        console.log('Error');
    }
    else{
        console.log('Success');
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EHeaven' });
});

router.post('/login', function (req, res) {
    res.render('login',{title: 'EHeaven' });
});

module.exports = router;
