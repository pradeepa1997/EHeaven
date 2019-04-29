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

// router.post('/users', function (req,res) {
//
//     var username = req.body.username;
//     var password = req.body.password;
//     console.log(username);
//     console.log(password);
//
//     if(username && password){
//         connection.query('SELECT * FROM sachin_test WHERE username = ?',[username],function (err,rows,fields) {
//
//             if(rows[0].password != password){
//                 password.bold();
//             }
//             else{
//                 console.log("correct login");
//                 res.render('users',{username:rows});
//             }
//         });
//     }
// });

module.exports = router;
