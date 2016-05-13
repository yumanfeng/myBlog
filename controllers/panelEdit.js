var router = require('./main')();
var tpl = require('../handlebars')();
// var tpl = Handlebars();

router.get('/', function (req, res) {
    var t = tpl.compile('panel.tpl');
    var html = t({  
        header: tpl.compile('panel-header.tpl')(),
        article: tpl.compile('panel-article-edit.tpl')(),
        pageTitle: "panel-edit",
        articleCSS: "edit",
    });
    res.send(html);
});


module.exports=router;