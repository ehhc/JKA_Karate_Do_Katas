/**
 * Theme-Toggle
 */
document.getElementById('theme-toggle').addEventListener('click', function () {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-kern-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-kern-theme', newTheme);
});

for(const jumper of document.getElementsByClassName("videoJumper")){
    jumper.addEventListener('click', function () {
        document.getElementById("video1").hidden = true;
        document.getElementById("video1").pause();
        document.getElementById("video2").hidden = true;
        document.getElementById("video2").pause();
        document.getElementById("video3").hidden = true;
        document.getElementById("video3").pause();
        let videoElement = document.getElementById("video" + jumper.getAttribute("data-video-vol"));
        videoElement.currentTime = jumper.getAttribute("data-video-time")
        videoElement.hidden = false;
        videoElement.play();
    })
}

document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function(){
        let allVideosLoaded = true;
        if(document.getElementById("video1").readyState === HTMLMediaElement.HAVE_NOTHING) {
            allVideosLoaded = false;
            console.error("Video 1 wurde nicht gefunden")
        }
        if(document.getElementById("video2").readyState === HTMLMediaElement.HAVE_NOTHING) {
            allVideosLoaded = false;
            console.error("Video 2 wurde nicht gefunden")
        }
        if(document.getElementById("video3").readyState === HTMLMediaElement.HAVE_NOTHING) {
            allVideosLoaded = false;
            console.error("Video 3 wurde nicht gefunden")
        }
        if(! allVideosLoaded) {
            document.getElementById("videosNotFoundModal").showModal();
        } else {
            document.getElementById("videosNotFoundModal").close();
        }
    }, 2000)
});

