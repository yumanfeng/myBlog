var express = require('express');
var router = express.Router();

var tpl = require('../handlebars')();
// var tpl = Handlebars();

router.get('/', function (req, res) {
    var t = tpl.compile('index.tpl');
    var html = t({
        article: tpl.compile('article-index.tpl')(),
        header:tpl.compile('header.tpl')(),
        footer:tpl.compile('footer.tpl')(),
        pageName:"index",
        pageTitle:"index",
    })
    res.send(html);
});

module.exports=router;