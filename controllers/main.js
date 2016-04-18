var express = require('express');
var router = express.Router();


// main controller
router.use("/",function(req,res,next) {
    if(!req.session.user){
        res.redirect('/login');
    }else{
        next();
    }
})

module.exports=router;