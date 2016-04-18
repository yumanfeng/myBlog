/// <reference path="typings/main.d.ts" />
var express = require('express');
var app = express();
var login = require('./controllers/login');

var bodyParser = require('body-parser');
var multer = require('multer'); 

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/static",express.static('static'));
app.use("/login",login);


var server = app.listen(3000,function () {
    console.log("server is started");
})
