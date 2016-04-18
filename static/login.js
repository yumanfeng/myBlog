function checkLogin() {
    var user = $("#user").val();
    var psw = $("#password").val();
    if (user != "" && psw != "") {
        checkValue(user, psw);
    } else {
        $("#danger").html("Username or Password can't be empty !");
    }
}

function checkValue(user, psw) {
    var url = "/login";
    //1.创建XMLHttpRequest组建    
    xmlHttpRequest = new XMLHttpRequest();
    //2.设置回调函数    
    xmlHttpRequest.onreadystatechange = checkResponse;
    //3.初始化XMLHttpRequest组建    
    xmlHttpRequest.open("POST", url, true);
    xmlHttpRequest.setRequestHeader("Content-Type","application/json")
    //4.发送请求    
    xmlHttpRequest.send(JSON.stringify({
        "user": user,
        "password": psw
    }));
}
// req:  {"user":[string],"password":[string]}
// resp: {"status":[boolean]}
// 
function checkResponse() {
    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
        var b = xmlHttpRequest.responseText;
        // 反序列化
        var resp = JSON.parse(b);
        if (resp.status) {
            window.location.href = "/";
        } else {
            $("#danger").html("Username or Password invaild!");
        }
    }else if(xmlHttpRequest.readyState == 4){
        $("#danger").html("Timeout, please retry!");
    }
}


