var Essay = require('../models/essay');
var time = require('../utils/time')
var tpl = require('../handlebars')();

function getEssaiesList(type, req, res) {
    var page = req.query.page;
    if (page == undefined) {
        page = 1;
    }
    getListCallback(type, page,function (result) {
        var t = tpl.compile('panel.tpl');
        var html = t({
            header: tpl.compile('panel-header.tpl')(),
            article: tpl.compile('panel-article.tpl')(result),
            pageTitle: "panel-note",
            articleCSS: "note",
        });
        res.send(html);
    })
}

function getListCallback(type, page,cb) {
    var essay = new Essay();

    essay.getList(type, page, function (err, docs) {
        var result = {};
        result.essaies = [];
        for (var i = 0; i < docs.length; i++) {
            var ey = {};
            ey.createTime = time.getTime(docs[i].time);
            ey.title = docs[i].title;
            ey.id = docs[i].id;
            ey.blogOwner="Manman";
            var index = docs[i].body.indexOf("<!--end-->");
            if (index >0) {
                ey.body=docs[i].body.slice(0,index);
            }else{
                ey.body=docs[i].body;
            }
            result.essaies.push(ey);
        }
        cb(result);
    });
}

exports.getEssaiesList = getEssaiesList
exports.getListCallback = getListCallback