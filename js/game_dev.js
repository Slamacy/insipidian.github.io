var video_links = [
    "https://www.youtube.com/embed/GDsrR80teRA",
    "https://www.youtube.com/embed/SCNZpFF7GYs",
    "https://www.youtube.com/embed/ZvjWA6ZMkEE"
];

function OpenVideo(video_id) {
    document.getElementById("game_video").src = video_links[video_id];
    document.getElementById("video_viewer").style.visibility = "visible"; 

}

function CloseVideo() {
    document.getElementById("video_viewer").style.visibility = "hidden"; 
    document.getElementById("game_video").src = document.getElementById("game_video").src;
}