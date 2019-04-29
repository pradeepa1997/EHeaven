var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var flash = require('express-flash-notification');
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

router.post('/users', function (req,res) {

    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);

    if(username && password){
        connection.query('SELECT * FROM sachin_test WHERE username = ?',[username],function (err,rows,fields) {
            console.log("----------------------------------------------");
            console.log(rows);
            console.log("----------------------------------------------");
            console.log(err);

            if(rows[0].password != password){
                res.redirect('/');
                document.getElementById('error').textContent = 'Login error';
            }
            else{
                console.log("correct login");
                res.render('users',{username:rows});
            }
        });
    }
});


module.exports = router;
