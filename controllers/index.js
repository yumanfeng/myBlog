var express = require('express');
var router = express.Router();

var tpl = require('../handlebars')();
var list = require('./panelEssaiesList')

router.get('/', function (req, res) {
    var page = req.query.page;
    if (page == undefined) {
        page = 1;
    }
    list.getListCallback('write', page, function (result) {
        // console.log(result);
        var t = tpl.compile('index.tpl');
        var html = t({
            article: tpl.compile('article-index.tpl')(result),
            header: tpl.compile('header.tpl')(),
            footer: tpl.compile('footer.tpl')(),
            articleCSS: "index",
            pageTitle: "index",
        })
        res.send(html);
    })
});

module.exports = router;