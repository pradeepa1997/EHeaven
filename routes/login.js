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

router.post('/users', function (req,res) {
    console.log("ehelllos");
   var username = req.body.username;
   var password = req.body.password;

   if(username && password){
       connection.query('SELECT * FROM sachin_test WHERE username = ?',[username,password],function (err,rows) {
           if(password == rows.passwod[0].password){
               console.log("correct login");
               res.render('users',{username:rows});
           }
           else{
               console.log(err);
           }
       });
   }
});

module.exports = router;
