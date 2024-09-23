/* let videoEnded = false;
let pageLoaded = false;

let vid = document.getElementById("video_caricamento");
vid.onended = function() {
    videoEnded=true;
};

document.addEventListener("DOMContentLoaded", () => {
    pageLoaded=true;
  });

if(videoEnded&&pageLoaded==true){
    if (videoEnded && pageLoaded) {
        document.getElementById("schermata_caricamento").style.display = "none";
    }
} */

// Durata della GIF in millisecondi (esempio: 5 secondi)
const gifDuration = 2500;

// Funzione da eseguire al termine della GIF
function onGifEnd() {
    const div = document.getElementById('schermata_caricamento');
    div.style.display = 'none'; // Nascondi il div
    console.log("La GIF ha terminato l'esecuzione e il div è stato nascosto.");
}

// Esegui la funzione al termine della durata della GIF
setTimeout(onGifEnd, gifDuration)