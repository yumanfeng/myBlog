/// <reference path="typings/main.d.ts" />

var handlebars = require('handlebars');
var fs = require('fs')

function creataTemp(d) {
    var obj = {};
    if(d){
        // specify dir path
        obj.dir=d;
    }else{
        // using default path
        obj.dir=__dirname+"/views/";
    }
    // compile 把file文件编译为一个handlebars模版实例
    // file文件的目录由dir指定，默认路径为 _dirname/views/
    obj.compile = function(file) {
        var source = fs.readFileSync(obj.dir+file, "utf8");
        return handlebars.compile(source);
    };
    obj.append = function(htmls) {
        var strings = [];
        for(var html in htmls){
            strings.push(html);
        } 
        return strings.join('');
    }
    return obj;
};

module.exports = creataTemp;