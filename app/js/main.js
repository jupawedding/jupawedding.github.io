var line_animation = document.getElementById("line-container");
var $pa = document.getElementById("pa");

var arrow = document.getElementById("arrow");
var $ju = document.getElementById("ju");
var $date = document.getElementById("date");


line_animation.addEventListener("animationend", revealArrow, false);
//$ju.addEventListener("animationend", revealPa, false);


function revealArrow(){
	arrow.classList.remove("hide");
	$date.classList.remove("hide");
}

function revealJu(){
	$ju.classList.remove("hide");
}




