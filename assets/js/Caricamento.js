let isPageLoaded = false;
let isVideoEnded = false;

function hideLoader() {
    if (isPageLoaded && isVideoEnded) {
        document.getElementById('loader').style.display = 'none';
    }
}

window.addEventListener('load', function() {
    isPageLoaded = true;
    hideLoader();
});

document.getElementById('loadingVideo').addEventListener('ended', function() {
    isVideoEnded = true;
    hideLoader();
});