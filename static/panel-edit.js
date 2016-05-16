new Vue({
  el: '#editor',
  data: {
    input: '# Please edit in here'
  },
  filters: {
    marked: marked
  }
})

function onSaveWrite(id) {
  // get article
  var obj = {}
  obj.title = $('.title').val();
  obj.md = $('#editor textarea').val();
  obj.createTime = Date.now();
  obj.type = $('input[name="Type"]:checked').val();
  var url ="/panel/edit";
  if(id!=undefined) {
    url+="?id="+id
  }
  
  Post(url, obj, function (resp) {
    // TODO: impl me
    if (resp.status) {
      alert('success');
      if (resp.type == "note") {
        window.location.href = "/panel/note";
      } else {
        window.location.href = "/panel";
      }
    } else {
      alert('fail!');
    }
  })
}

// getTime get a time for now , it using local time,
// time formatter is yy-mm-dd-hh:mm:ss
function getTime(timesteamp) {
  var d = new Date(timesteamp), str = '';
  str += d.getFullYear() + '-';
  str += d.getMonth() + 1 + '-';
  str += d.getDate() + '-';
  str += d.getHours() + ':';
  str += d.getMinutes() + ':';
  str += d.getSeconds();
  return str;
}