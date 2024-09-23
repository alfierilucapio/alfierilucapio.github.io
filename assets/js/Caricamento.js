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
const gifDuration = 3440;
let pageLoaded = false;

document.addEventListener("DOMContentLoaded", () => {
    pageLoaded=true;
});

// Funzione da eseguire al termine della GIF
function onGifEnd() {
    if(pageLoaded){
        const div = document.getElementById('schermata_caricamento');
        div.classList.add('hidden');
        setTimeout(() => {
            div.style.display = 'none';
        }, 500); // Tempo di transizione in millisecondi
    }else{
        gifDuration = gifDuration + 3440;
    }
}

// Esegui la funzione al termine della durata della GIF
setTimeout(onGifEnd, gifDuration)