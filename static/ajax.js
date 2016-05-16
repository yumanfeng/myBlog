function Post(url, obj, done) {
    var xmlHttpRequest = new XMLHttpRequest();
    var callback = function checkResponse() {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var b = xmlHttpRequest.responseText;
            // 反序列化
            var resp = JSON.parse(b);
            done(resp);
        }
    }
    xmlHttpRequest.onreadystatechange = callback;
    xmlHttpRequest.open('POST', url, true);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
    xmlHttpRequest.send(JSON.stringify(obj));
}