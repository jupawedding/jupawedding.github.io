$('.play-btn').click(function(){
	$('.vinyl-image').addClass('animate');
});


var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
	player = new YT.Player('video', {
    	events: {
      	
      	'onReady': onPlayerReady
    	}
  	});
}

function onPlayerReady(event) {
  
 var playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
}

