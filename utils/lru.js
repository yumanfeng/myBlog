function newLRU(maxchache) {
    var lru = {};
    if (maxchache < 1) {
        throw "maxchache must > 0";
    }
    
    lru.maxchache = maxchache;
    lru.list = {};
    lru.len = 0;

    lru.Add = function(key, value) {
        if (lru.len == lru.maxchache) {
            // del last one
            var len = lru.maxchache / 2;
            if (len < 1) {
                len = 1;
            }
            // sort
            var array = new Array();
            for(var p in lru.list){
                array.push(lru.list[p]);
            }
            array.sort(function(a, b) {
                if (a.hot < b.hot) {
                    return -1
                }
                if (a.hot == b.hot) {
                    return 0
                }
                return 1
            });
            for (var index = 0; index < len; index++) {
                delete lru.list[array[index].key];
                lru.length--
            }
        }
        // add new one
        lru.list[key]={
            key:key,
            value: value,
            host:0,
            next:undefined
        };
        lru.len++
    }
    
    lru.Get = function(key) {
        var o = lru.list[key];
        if(!o){
            return o;
        }
        o.host++;
        return o.value
    }
    
    return lru;
}

module.exports=newLRU;

var l = newLRU(2);
l.Add("1","1")
// console.log(l.len,l.list)
l.Add("醉了","2")
// console.log(l.len,l.list)
console.log("asdhakj",l.Get("1"))
l.Add("渴了","3")
// console.log(l.len,l.list)
console.log("??",l.Get("2"))

// var a = new Array();

// a["1hjkg"]="2"

// console.log(a.length)

// console.log(a)