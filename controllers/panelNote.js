var router = require('./main')();
var tpl = require('../handlebars')();
// var tpl = Handlebars();

router.get('/', function (req, res) {
    console.log("bbbb call");
    var t = tpl.compile('panel.tpl');
    var html = t({
        header: tpl.compile('panel-header.tpl')(),
        article: tpl.compile('panel-article.tpl')(),
        pageTitle: "panel-note",
        articleCSS: "note",
    });
    res.send(html);
});


module.exports=router;