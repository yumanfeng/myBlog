var express = require('express');
var router = express.Router();

var tpl = require('../handlebars')();
// var tpl = Handlebars();

router.get('/', function (req, res) {
    var t = tpl.compile('index.tpl');
    // 首先获取参数
    // 通过参数去数据库获得文章信息（文章的内容）
    // 通过文章的内容，渲染模版
    // 把渲染出来的结果传递至客户端
    var html = t({
        article: tpl.compile('article-writeAndNote.tpl')(),
        header:tpl.compile('header.tpl')(),
        footer:tpl.compile('footer.tpl')(),
        articleCSS:"writeAndNote",
        pageTitle:"write",
    })
    res.send(html);
});

module.exports=router;