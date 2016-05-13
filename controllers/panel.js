var router = require('./main')();
var tpl = require('../handlebars')();
// var tpl = Handlebars();

router.get('/', function (req, res) {
    console.log("call pannel")
    var t = tpl.compile('panel.tpl');
    var html = t({
        header: tpl.compile('panel-header.tpl')(),
        article: tpl.compile('panel-article.tpl')(),
        pageTitle: "panel-write",
        articleCSS: "panel",
    });
    res.send(html);
});


module.exports=router;