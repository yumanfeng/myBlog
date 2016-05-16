var router = require('./main')();
var list=require('./panelEssaiesList')

router.get('/', function (req, res) {
    list.getEssaiesList('write',req,res);
});


module.exports=router;