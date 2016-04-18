/// <reference path="../typings/main.d.ts" />

var dbconfig = require('./db')
var sha1WithSalt = require('../utils/sha1');

function User(name, password) {
    var uname = name;
    var psw = password;

    this.login = function(callback) {
        var m = new dbconfig.MongoDB(dbconfig.url, dbconfig.mongoClient);
        m.findOne('users', {}, { name: uname }, function(err, doc) {
            if (doc == null) {
                callback(err, false)
            } else {
                callback(err, sha1WithSalt(psw, dbconfig.salt) === doc.password)
            }
        })
    }
}

module.exports = User;