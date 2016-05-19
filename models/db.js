/// <reference path="../typings/main.d.ts" />

// url: MongoDB地址； mongoClient：MongoDB客户端实例
function MongoDB(url, mongoClient) {
    var url = url;
    var mongoClient = mongoClient;
    // 获取MongoDB连接 connect(url, function(err, db)）
    // url: MongoDB地址；db：MongoDB自带的连接
    var connect = function(callback) { 
        mongoClient.connect(url, function(err, db) {
            if (err) {
                throw 'connect mongodb error'
            } else {
                callback(db);
            }
        });
    };
    // 增 save(collname, obj, callback)
    // collname：集合名字；obj：需要存入的对象；callback(err, result)；
    this.save = function(collname, obj, callback) {
        connect(function(db) {
            var collection = db.collection(collname);
            collection.insertOne(obj, function(err, result) {
                callback(err, result);
                db.close();
            });
        });
    };
    // 删 delOne(collname,filter,callback)
    // collname：集合名字；filter：删除条件如｛ID：1，｝；callback(err, result)
    this.delOne= function (collname,filter,callback) {
        connect(function(db) {
            var collection = db.collection(collname);
                collection.deleteOne(filter, {},function(err, result) {
                callback(err, result);
                db.close();
            });
        });
    }
    
    // 查 findOne(collname, option, obj, callback)
    // collname：集合名字；option：更复杂的查询；obj：需要查找的对象；callback(err, doc);
    this.findOne = function(collname, option, obj, callback) {
        connect(function(db) {
            var collection = db.collection(collname);
            collection.findOne(obj, option, function(err, doc) {
                callback(err, doc);
                db.close();
            });
        });
    };
   
   // collname：集合名字；query：查询条件；skip：跳过几条；limit：查几条；callback(err, docs);
    this.find = function (collname,query,skip,limit,callback) {
        connect(function (db) {
             var collection = db.collection(collname);
             collection.find(query).skip(skip).limit(limit).toArray(function (err,docs) {
                 callback(err,docs);
                 db.close();
             })
        });
    };
}

exports.url = 'mongodb://localhost:27017/blog';
exports.mongoClient = require('mongodb').MongoClient;
exports.salt = "agfsdga[fdpinlibdjgbim]";
exports.MongoDB=MongoDB;
