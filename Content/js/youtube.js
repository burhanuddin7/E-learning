var player, currentYtVideoId = 0, currentIndex = 0;
var ytVideoIDs = [
    '7iB6DnfLywk',
    'WLZjwyWPAA0',
    '7iB6DnfLywk'
];
var videoSources = ["Content/video/msd.mp4", "https://www.w3schools.com/tags/movie.mp4", "Content/video/msd.mp4"];

$(function(){
    $(".section-video-rating-icon").click(function(){
        $(".section-video-rating-icon").removeClass("section-video-rating-selected");
        $(this).addClass("section-video-rating-selected");
        if (currentYtVideoId < ytVideoIDs.length) {
            showNextVideoPlayer();
        }
        /*For video mp4
        if(currentIndex < (videoSources.length - 1)){
            showNextVideoPlayer();
        }*/
        else{
            alert("Video Playlist completed");
        }
    });

    /*Video API logic for mp4 video*
    //dvloadVideoSrc();
    // array of the events we want to track
    //var events=new Array("abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting");
    //var events=new Array("ended","pause","play","seeking");
    
    // add event listeners to the video
    for (var i in events) {
        videoElem.addEventListener(events[i], playVideoEvent, false);
    }*/
    $(".section-video-buffer").click(function(){
        player.playVideo();
        dvHideVideo();
        //videoElem.play();
    });
    dvShowVideo();
});


/*var videoElem= document.getElementById('dvVideoPlayer');
function playVideoEvent(e) {
    if (e.type == "pause") {
        dvShowVideo();
    }else if (e.type == "seeking") {
        dvHideVideo();
    }else if (e.type == "ended") {
        dvShowRatingOverlay();
    }
}
function dvloadVideoSrc() {
    videoElem.src = videoSources[currentIndex];
    videoElem.load();
}
function dvNextVideoSrc(){
    currentIndex = (currentIndex+1) % videoSources.length;
    videoElem.src = videoSources[currentIndex];
    videoElem.addEventListener('ended', dvloadVideoSrc, false);
}*/

/*video logic ends here*/ 

/*Youtube API logic starts here */

var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

for (var i in ytVideoIDs) {
    var ytVideoFrame = $("#dvIframeVideo");
    ytVideoFrame.attr({
        src: 'https://www.youtube.com/embed/'+ ytVideoIDs[currentYtVideoId]+ '?enablejsapi=1&rel=0&mute=1',
        frameborder: 0
    });
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('dvIframeVideo', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    //event.target.loadVideoById(ytVideoIDs[currentYtVideoId]);
}

/*Youtube api call video*/
function changeYtVideoSatus(playerStatus) {

if (playerStatus == -1) {
    // unstarted 
} else if (playerStatus == 0) {
    // ended 
    dvShowRatingOverlay();
    //player.stopVideo();
} else if (playerStatus == 1) {
    // playing 
} else if (playerStatus == 2) {
    // paused
    //dvShowVideo();
    player.pauseVideo();
} else if (playerStatus == 3) {
    //buffering
} else if (playerStatus == 5) {
    // video cued
}
}

function onPlayerStateChange(event) {
    changeYtVideoSatus(event.data);
    if (event.data == YT.PlayerState.ENDED) {
        currentYtVideoId++;
        if (currentYtVideoId < ytVideoIDs.length) {
            player.loadVideoById(ytVideoIDs[currentYtVideoId]);
            player.stopVideo();
        }else{
            player.stopVideo();
        }
    }
}

/*Common functions*/
function dvHideVideo(){
    $(".section-video-overlay, .section-video-buffer").hide();
}
function dvShowVideo(){
    $(".section-video-overlay, .section-video-buffer").show();
}
function dvShowRatingOverlay(){
    $(".section-video-buffer, .section-video-completion").hide();
    $(".section-video-overlay, .section-video-rating").fadeIn();
}
function showNextVideoPlayer(){
    $(".section-video-rating").fadeOut(2000,function(){
        //dvNextVideoSrc();
        $(".section-video-rating-icon").removeClass("section-video-rating-selected");
    });
    $(".section-video-overlay, .section-video-completion").delay(2000).fadeIn();
    $(".section-video-completion").delay(6000).fadeOut();
    $(".section-video-buffer").delay(9000).fadeIn();
}
