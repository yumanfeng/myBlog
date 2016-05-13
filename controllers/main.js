var express = require('express');

function main() {
    var router = express.Router();
    router.use("/",function(req,res,next) {
        if(!req.session.user){
            res.redirect('/login');
        }else{
            next();
        }
    })
    return router;
}

module.exports=main;