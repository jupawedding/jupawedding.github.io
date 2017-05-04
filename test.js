function setStage() {
    $winW = $win.width(), $winH = $win.height(), $fifth = $("#main figure:nth-of-type(5)"), $fifth.addClass("hide")
}
$bod = $("body"), $win = $(window), $doc = $(document), $winW = $win.width(), $winH = $win.height();
var $autoScroll, $autoScroll2, $autoScroll3, $autoScroll4, $focus = !0;
scrollSettings = {
    mouseWheel: !0,
    scrollX: !1,
    scrollY: !0,
    probeType: 3,
    mouseWheelSpeed: 100,
    tap: !0,
    click: !0,
    bounce: !1,
    scrollbars: !0,
    fadeScrollbars: !0,
    interactiveScrollbars: !0,
    disablePointer: !0,
    disableTouch: !1,
    disableMouse: !1
}, $doc.ready(function() {
    $first = $("#main figure:nth-of-type(1)"), $second = $("#main figure:nth-of-type(2)"), $third = $("#main figure:nth-of-type(3)"), $fourth = $("#main figure:nth-of-type(4)"), $fifth = $("#main figure:nth-of-type(5)"), $(".stretched").anystretch(), $("#splash h1").fitText(.425), $("#main h2").fitText(.6), $("#manifesto p").fitText(1.5), $("footer h4").fitText(.4), $("footer nav").fitText(.75), scroller = new IScroll("#main", scrollSettings), scroller.on("scroll", function() {
        clearTimeout($autoScroll), $y = parseInt(this.y >> 0) * -1, $y > 10 ? $("#intro .arrow").addClass("hide") : $("#intro .arrow").removeClass("hide"), $max = 1 + $y / 5e3, $scale = Math.min(Math.max(parseFloat($max), 1), 2), $scale < 1.25 && $first.find("img").css("transform", "scale(" + $scale + ")"), $max = 200 - $y / $winH * 50, $left = Math.min(Math.max(parseFloat($max), 50), 250), $second.css("left", $left + "vw"), $offset = 200 - $y / $winH * 100 + 200, $left2 = Math.min(Math.max(parseFloat($offset), 0), 100), $third.css("left", $left2 + "vw"), $offset2 = 250 - $y / $winH * 100 + 300, $left3 = Math.min(Math.max(parseFloat($offset2), 50), 250), 50 === $left3 ? $third.addClass("gray") : $third.removeClass("gray"), $fourth.css("left", $left3 + "vw"), $offset3 = 250 - $y / $winH * 100 + 350, $left4 = Math.min(Math.max(parseFloat($offset3), 0), 100), $fifth.css("left", $left4 + "vw"), $offset3 < -25 ? $fifth.addClass("hide") : $fifth.removeClass("hide"), $y == $(".scroller #intro").outerHeight(!0) - 1 ? (clearTimeout($autoScroll2), $autoScroll2 = setTimeout(function() {
            scroller.scrollTo(0, ($(".scroller").height() - $winH) * -1, 2e3, IScroll.utils.ease.quadratic)
        }, 6e3)) : clearTimeout($autoScroll2), 0 == $y ? (clearTimeout($autoScroll3), $autoScroll3 = setTimeout(function() {
            scroller.scrollTo(0, $(".scroller #intro").outerHeight(!0) * -1, 1e4, IScroll.utils.ease.quadratic)
        }, 8e3)) : clearTimeout($autoScroll3), $y >= $(".scroller").height() - $winH - .05 * $winW ? (clearTimeout($autoScroll4), $autoScroll4 = setTimeout(function() {
            scroller.scrollTo(0, 0, 6e3, IScroll.utils.ease.quadratic)
        }, 12e3)) : clearTimeout($autoScroll4)
    }), $("#intro .arrow").click(function() {
        scroller.scrollTo(0, $(".scroller #intro").outerHeight(!0) * -1, 1e4, IScroll.utils.ease.quadratic)
    }), $("footer .arrow").click(function() {
        scroller.scrollTo(0, 0, 6e3, IScroll.utils.ease.quadratic)
    })
}).on("mousemove", function() {
    clearTimeout($autoScroll), clearTimeout($autoScroll2), clearTimeout($autoScroll3), clearTimeout($autoScroll4)
}), $win.blur(function() {
    clearTimeout($autoScroll), clearTimeout($autoScroll2), clearTimeout($autoScroll3), clearTimeout($autoScroll4), $focus = !1
}).focus(function() {
    $focus = !0
}).load(function() {
    setStage(), $bod.addClass("loaded"), setTimeout(function() {
        $bod.addClass("hide-splash")
    }, 2e3), document.hasFocus() ? $autoScroll = setTimeout(function() {
        scroller.scrollTo(0, $(".scroller #intro").outerHeight(!0) * -1, 1e4, IScroll.utils.ease.quadratic)
    }, 8e3) : $focus = !1
}).resize(function() {
    setStage()
});