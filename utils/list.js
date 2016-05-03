var list = {
    head:undefined, // node
    tail:undefined // node
};

list.pushBack=function(value){
    var node = {
        value:value,
        prev:list.tail
        // next:list.head
    }
    
    if(!list.tail){
        list.head=node;
        list.tail=node;
    }else{
        list.tail.next=node;
        node.prev=list.tail;
        node.tail=node;
    }
    return node;
}

list.removeFront=function() {
    var node = list.head;
    list.head=node.next;
    if(node.next){
        node.next.prev=undefined;    
    }
    node.prev = undefined;
    node.next = undefined;
    return node;
}

list.moveBack=function(node) {
    if(node==list.head){
        list.head=node.next;
        console.log( "head",list.tail)
        list.head.prev = undefined;
    }
    list.tail.next = node;
    node.next=undefined;
    node.prev=list.tail;
    list.tail=node;
    console.log("tail",list.tail)
}

list.Back=function() {
    return list.tail;
}

list.Front=function() {
    return list.head;
}

var n=list.pushBack("1111");
list.pushBack("222");
console.log(list.Front())
list.moveBack(n)
console.log(list.Front())
list.removeFront()
console.log(list.Front())