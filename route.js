/// <reference path="./typings/main.d.ts" />

var express = require('express');
var app = express();
var session = require('express-session')

var bodyParser = require('body-parser');
var multer = require('multer'); 

// controllers
var login = require('./controllers/login');
var panel= require('./controllers/panel');
var index = require('./controllers/index');
var indexNote = require('./controllers/index-note');
var write = require('./controllers/write');
var note = require('./controllers/note');
var panelNote = require('./controllers/panelNote');
var panelEdit = require('./controllers/panelEdit');


// session
app.use(session({
  secret: 'Oh my blog!',
  resave: false,
  saveUninitialized: true,
}));

// Use handlebars as template engine（配置选择引擎handlebars）
// app.engine("html", consolidate.handlebars);
// app.set("view engine", "html");
// app.set("views", __dirname + "/views");
// // Register partials（注册模板）
// var partials = "./views/partials/";
// fs.readdirSync(partials).forEach(function (file) {
//   var source = fs.readFileSync(partials + file, "utf8"),
//     partial = /(.+)\.html/.exec(file).pop();
//     Handlebars.registerPartial(partial, source);
// });

// 设置模板
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);
// // 注册模板
// var hbs = require('hbs');
// hbs.registerPartials(__dirname + '/views');
// // 使用模版引擎
// app.set('views', './view');
// app.set('view engine', 'jade');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/static",express.static('static'));
app.use("/login",login);
app.use("/",index);
app.use("/note",indexNote);
app.use("/write/:year/:month/:day/:title",write);
app.use("/note/:year/:month/:day/:title",note);

app.use("/panel",panel);
app.use("/panel/note",panelNote);
app.use("/panel/edit",panelEdit);



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