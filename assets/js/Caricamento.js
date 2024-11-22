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



/* // Durata della GIF in millisecondi (esempio: 5 secondi)
const gifDuration = 2580;
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
        gifDuration = gifDuration + 2580;
    }
}

// Esegui la funzione al termine della durata della GIF
setTimeout(onGifEnd, gifDuration) */


// Durata della GIF in millisecondi (esempio: 1.71 secondi)
let gifDuration = 2580;
let pageLoaded = false;

// Funzione per mostrare la GIF di caricamento
function mostraGifCaricamento() {
    const videoCaricamento = document.getElementById('video_caricamento');
    if (videoCaricamento) {
        videoCaricamento.style.display = 'block';
        // Esegui la funzione al termine della durata della GIF
        setTimeout(onGifEnd, gifDuration);
    } else {
        console.warn("Elemento 'video_caricamento' non trovato.");
    }
}

// Funzione per nascondere la schermata di caricamento
function nascondiSchermataCaricamento() {
    const divCaricamento = document.getElementById('schermata_caricamento');
    if (divCaricamento) {
        divCaricamento.classList.add('hidden');
        setTimeout(() => {
            divCaricamento.style.display = 'none';
        }, 500); // Tempo di transizione in millisecondi
    } else {
        console.warn("Elemento 'schermata_caricamento' non trovato.");
    }
}

// Funzione da eseguire al termine della GIF
function onGifEnd() {
    if (pageLoaded) {
        nascondiSchermataCaricamento();
    } else {
        gifDuration += 2580; // Aumenta la durata e riattiva il timeout
        setTimeout(onGifEnd, gifDuration);
    }
}

// Evento DOMContentLoaded per indicare che la pagina è caricata
document.addEventListener("DOMContentLoaded", () => {

    // Funzione per aggiornare l'altezza dinamicamente
    function adjustCarouselHeight() {
        const carousel = document.querySelector('#home');
        carousel.style.height = `${window.innerHeight}px`;
    }

    // Inizializza l'altezza dell' hero
    adjustCarouselHeight();

    mostraGifCaricamento();
});

// Evento load per indicare che tutte le risorse della pagina sono caricate
window.addEventListener("load", () => {
    pageLoaded = true;
});