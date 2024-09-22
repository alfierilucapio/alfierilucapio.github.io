let isPageLoaded = false;
let isVideoEnded = false;

function hideLoader() {
    if (isPageLoaded && isVideoEnded) {
        document.getElementById('schermata_caricamento').style.display = 'none';
    }
}

window.addEventListener('load', function() {
    isPageLoaded = true;
    hideLoader();
});

document.getElementById('video_caricamento').addEventListener('ended', function() {
    isVideoEnded = true;
    hideLoader();
});