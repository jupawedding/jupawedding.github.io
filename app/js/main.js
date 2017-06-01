$('.play-btn').click(function(){
	$('.vinyl-image').addClass('animate');
	$('.vinyl-arm').addClass('arm-animate');
  console.log('in');
});

$('.pause-btn').click(function(){
  $('.vinyl-image').removeClass('animate');
  $('.vinyl-arm').removeClass('arm-animate');
  console.log('in');
});


// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });

   var pauseButton = document.getElementById("pause-btn");
      pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


