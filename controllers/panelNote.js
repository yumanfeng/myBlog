var router = require('./main')();
var list=require('./panelEssaiesList')

router.get('/', function (req, res) {
   list.getEssaiesList('note',req,res)
});

module.exports = router;