/// <reference path="../typings/main.d.ts" />

var dbconfig = require('./db')
var startTime = Date.now();
var startID = 1;

function Essay(title, body, time, type) {
    var essay = {};
    essay.title = title;
    essay.body = body;
    essay.time = time;
    essay.type = type;
    essay.id = startTime+"" + startID
    startID++;

    this.save = function (cb) {
        // save into mongodb
        var m = new dbconfig.MongoDB(dbconfig.url, dbconfig.mongoClient);
        m.save('essay', essay, cb);
    }
    
    this.del = function (id,cb) {
        var m = new dbconfig.MongoDB(dbconfig.url, dbconfig.mongoClient);
        m.delOne('essay', {id:id}, cb);
    }

    this.getList = function (type, page, cb) {
        var m = new dbconfig.MongoDB(dbconfig.url, dbconfig.mongoClient);
        m.find('essay', {type:type}, (page - 1) * 10, 10, cb);
    }
    
    this.getOne=function (id,cb) {
        var m = new dbconfig.MongoDB(dbconfig.url, dbconfig.mongoClient);
        m.findOne('essay',{},{id:id},cb)
    }
}

module.exports = Essay;