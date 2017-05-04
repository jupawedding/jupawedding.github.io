var line_animation = document.getElementById("line-container");
var arrow = document.getElementById("arrow");

$bod = $("body"); 
$win = $(window);
$doc = $(document); 
$winW = $win.width(); 
$winH = $win.height();



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
};

$doc.ready(function() {
	$first = $(".one");
	console.log($first);
	$second = $(".two");
	$third = $(".three"); 
	$fourth = $(".four"); 
	$fifth = $(".five");

	scroller = new IScroll("#main", scrollSettings);
	scroller.on('scroll', function() {
		console.log("scroll");
		clearTimeout($autoScroll);
		$y = parseInt(this.y >> 0) * -1; 
		//$y > 10 ? $("#intro .arrow").addClass("hide") : $("#intro .arrow").removeClass("hide");
		$max = 1 + $y / 5e3;
		console.log($max);
		$scale = Math.min(Math.max(parseFloat($max), 1), 2);
		$scale < 1.25 && $first.find("img").css("transform", "scale(" + $scale + ")");
		console.log($scale);
		$max = 200 - $y / $winH * 50; 
		
		$left = Math.min(Math.max(parseFloat($max), 50), 250);
		$second.css("left", $left + "vw"); 
		$offset = 200 - $y / $winH * 100 + 200;
		$left2 = Math.min(Math.max(parseFloat($offset), 0), 100);
		
		$third.css("left", $left2 + "vw"); 
		$offset2 = 250 - $y / $winH * 100 + 300;
		$left3 = Math.min(Math.max(parseFloat($offset2), 50), 250);
		50 === $left3 ? $third.addClass("gray") : $third.removeClass("gray");
		
		$fourth.css("left", $left3 + "vw");
		$offset3 = 250 - $y / $winH * 100 + 350;
		$left4 = Math.min(Math.max(parseFloat($offset3), 0), 100);
		
		$fifth.css("left", $left4 + "vw"); 
		$offset3 < -25 ? $fifth.addClass("hide") : $fifth.removeClass("hide");

		$y == $(".scroller #intro").outerHeight(!0) - 1 ? (clearTimeout($autoScroll2), $autoScroll2 = setTimeout(function() {
            scroller.scrollTo(0, ($(".scroller").height() - $winH) * -1, 2e3, IScroll.utils.ease.quadratic)
        }, 6e3)) : clearTimeout($autoScroll2), 0 == $y ? (clearTimeout($autoScroll3), $autoScroll3 = setTimeout(function() {
            scroller.scrollTo(0, $(".scroller #intro").outerHeight(!0) * -1, 1e4, IScroll.utils.ease.quadratic)
        }, 8e3)) : clearTimeout($autoScroll3), $y >= $(".scroller").height() - $winH - .05 * $winW ? (clearTimeout($autoScroll4), $autoScroll4 = setTimeout(function() {
            scroller.scrollTo(0, 0, 6e3, IScroll.utils.ease.quadratic)
        }, 12e3)) : clearTimeout($autoScroll4);

    });

})

$doc.on("mousemove", function() {
    clearTimeout($autoScroll);
    clearTimeout($autoScroll2); 
    clearTimeout($autoScroll3);
    clearTimeout($autoScroll4);
    console.log("in");
});

$(window).on('load', function() {
    setStage(); 
    $bod.addClass("loaded"); 
    setTimeout(function() {
        $bod.addClass("hide-splash")
    }, 2e3), document.hasFocus() ? $autoScroll = setTimeout(function() {
        scroller.scrollTo(0, $(".scroller #intro").outerHeight(!0) * -1, 1e4, IScroll.utils.ease.quadratic)
    }, 8e3) : $focus = !1
});

line_animation.addEventListener("animationend", revealArrow, false);

function revealArrow(){
	arrow.classList.remove("hide");
}

function setStage() {
    $winW = $win.width(); 
    $winH = $win.height();
}

