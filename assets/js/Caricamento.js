let isPageLoaded = false;
let isVideoEnded = false;

// Imposta isPageLoaded a true quando la pagina è completamente caricata
window.addEventListener('load', function() {
    isPageLoaded = true;
    hideLoader();
});

// Imposta isVideoEnded a true quando il video è terminato
document.getElementById('video_caricamento').addEventListener('ended', function() {
    isVideoEnded = true;
    hideLoader();
});

// Funzione per nascondere il loader se entrambe le condizioni sono vere
function hideLoader() {
    if (isPageLoaded && isVideoEnded) {
        document.getElementById('schermata_caricamento').style.display = 'none';
    }
}