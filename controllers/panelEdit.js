var router = require('./main')();
var tpl = require('../handlebars')();
var essay = require('../models/essay')

router.get('/', function (req, res) {
    var id = req.query.id;
    if (id != undefined) {
        var e = new essay();
        if (req.query.del!=undefined) {
            // del file
            e.del(id,function (err,result) {
                res.redirect("/panel")
            })
            return
        }
        // get this article
        
        e.getOne(id, function (err, doc) {
            if (err) {
                res.status(500).send(err);
            } else {
                if (doc==null) {
                    return
                }
                var result = {
                    title: doc.title,
                    body: doc.body,
                    id: doc.id,
                }
                if (doc.type == "note") {
                    result.isCheckedWrite = "";
                    result.isCheckedNote = 'checked="checked"';
                } else {
                    result.isCheckedWrite = 'checked="checked"';
                    result.isCheckedNote = "";
                }
                var t = tpl.compile('panel.tpl');
                var html = t({
                    header: tpl.compile('panel-header.tpl')(),
                    article: tpl.compile('panel-article-edit.tpl')(result),
                    pageTitle: "panel-edit",
                    articleCSS: "edit",
                });
                res.send(html);
            }
        })
    } else {
        var result = {
                    title: "标题",
                    body: "# 请在这里输入正文",
                    id: "",
                    isCheckedWrite:'checked="checked"',
                    isCheckedNote:"",
                }
        var t = tpl.compile('panel.tpl');
        var html = t({
            header: tpl.compile('panel-header.tpl')(),
            article: tpl.compile('panel-article-edit.tpl')(result),
            pageTitle: "panel-edit",
            articleCSS: "edit",
        });
        res.send(html);
    }
});

router.post('/', function (req, res) {
    var e = new essay(req.body.title, req.body.md, req.body.createTime, req.body.type)
    var id = req.query.id
    var obj = {};

    var save = function (err, result) {
        if (!err) {
            obj.status = true;
            obj.type = req.body.type;
        } else {
            obj.status = false;
        }
        res.send(JSON.stringify(obj));
    }

    if (id != undefined) {
        // del exist article
        e.del(id, function (err, result) {
            if (err) {
                obj.status = false;
                res.send(JSON.stringify(obj));
            } else {
                console.log("should delete",id)
                e.save(save);
            }
        })
    } else {
        e.save(save);
    }

})

module.exports = router;