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

/* GET login page */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'EHeaven' });
});

router.post('/users', function (req, res) {
    res.render('users',{title: 'EHeaven' });
});

router.post('/users', function (req,res) {
   var username = req.body.username;
   var password = req.body.password;

   if(username && password){
       connection.query('SELECT * FROM sachin_test WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if(results.length > 0){

            }
            else{
                res.send("Incorrect username of password !");
            }
       });
   }
   else{
       res.send("Please enter your username and password");
       res.end();
   }

    
});

module.exports = router;
  