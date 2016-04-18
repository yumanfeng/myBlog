var express = require('express');
var router = express.Router();
var user = require('../models/user')

router.get('/', function(req, res) {
  res.redirect('/static/login.html');
});

router.post('/',function(req, res) {
    // 获取客户端POST的用户名和密码
     var u = new user(req.body.user,req.body.password)
     u.login(function (err,ok) {
         if(err){
             res.send("error:",err);
         }else{
             if(ok){
                 // user has logon
                 req.session.user=u;
                 res.send('{"status":true}');
             }else{
                 res.send('{"status":false}');
             }
         }
     })
})

module.exports = router;