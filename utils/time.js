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

exports.getTime=getTime;