/// <reference path="./typings/main.d.ts" />

var express = require('express');
var app = express();
var session = require('express-session')

var bodyParser = require('body-parser');
var multer = require('multer'); 

// controllers
var login = require('./controllers/login');
var panel= require('./controllers/panel');


// session
app.use(session({
  secret: 'Oh my blog!',
  resave: false,
  saveUninitialized: true,
}));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/static",express.static('static'));
app.use("/login",login);
app.use("/panel",panel)


var server = app.listen(3000,function () {
    console.log("server is started");
})


// app.use("/download",express.static('/Users/mandy/Music/网易云音乐'));
// var fs = require('fs')
// app.get("/file",function(req,res) {
//     var files = fs.readdirSync('/Users/mandy/Music/网易云音乐')
//     console.log(files);
//     var rest="<html><body>"
   
//     for (var index = 0; index < files.length; index++) {
//         var file = files[index];
//          rest+="<li>"
//          rest+=("<a href=\"/download/"+file+"\">")
//          rest+=file
//          rest+="</a>"
//         rest+="</li>"
//     }
    
//     res.send(rest+="</body></html>")
// })