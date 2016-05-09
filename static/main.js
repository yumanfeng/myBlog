/// <reference path="../typings/main.d.ts" />

// 滑轮滚动时nav的样式转换
var nav = $(".nav");
$(Document).scroll(function () {
    if ($(Document).scrollTop() > 60) {
        nav.addClass("isFixed");
    }
    else if ($(Document).scrollTop() == 0) {
        nav.removeClass("isFixed");
        nav.removeClass("isVisible");
    }
    $(Document).mousewheel(function (event) {
        // event.deltaX; event.deltaY:向上滑动为负，向下滑动为正； event.deltaFactor;
        if (event.deltaY > 0 && nav.hasClass("isFixed")) {
            nav.addClass("isVisible");
        } else {
            nav.removeClass("isVisible");
        }
    });
});

// 博文(write)和笔记(note)页面的目录(list) 鼠标覆盖的样式转换
$(".list").hover(function () {
    $(".list-text").fadeIn("slow");
}, function () {
    $(".list-text").css("display","none");
});
$(".pageNumber").mouseover(function() {
    $(".pageNumber").css("display","none");
    $(".goPage").css("display","block");
});
$(".goPage").mouseout(function() {
    $(".goPage").css("display","none");
    $(".pageNumber").css("display","block");
});