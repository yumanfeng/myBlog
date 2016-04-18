var router = require('./main');

router.get("/",function(req,res){
    res.send("OK");
})

module.exports=router;