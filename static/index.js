/// <reference path="../typings/main.d.ts" />

var nav = $(".nav");
$(Document).scroll(function() {
    if ($(Document).scrollTop() > 60) {
        nav.addClass("isFixed");
    }
    else if ($(Document).scrollTop() == 0) {
        nav.removeClass("isFixed");
        nav.removeClass("isVisible");
    }
    $(Document).mousewheel(function(event) {
        // event.deltaX; event.deltaY:向上滑动为负，向下滑动为正； event.deltaFactor;
        if (event.deltaY > 0 && nav.hasClass("isFixed")) {
            nav.addClass("isVisible");
        } else {
            nav.removeClass("isVisible");
        }
    });
});