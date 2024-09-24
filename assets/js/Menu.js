let hidden = false;
let count = 0;
let isOpen = false;
const navMenu = document.querySelector("#navMenu");

navMenu.addEventListener("click", ()=>{
    animazioneMenu();
});

function animazioneMenu(){
    navMenu.classList.toggle("active");
}

function mostraDiv() {
    let isCountEven = count % 2 === 0;
    
    let mainPage = document.getElementById('mainPage');
    let div = document.getElementById('mioDiv');

    if (isCountEven) {
        div.style.display = 'block';
        mainPage.style.display = 'none';
    }

    div.classList.remove("animazione");
    div.offsetWidth; // Forza un reflow
    div.classList.add("animazione");

    isOpen = !isOpen;

    if (isOpen) {
        div.style.top = "0";
        div.style.pointerEvents = "all";
    } else {
        div.style.top = "-100%";
        div.style.pointerEvents = "none";
        
        mainPage.style.display = 'block';
        setTimeout(() => {
            div.style.display = 'none';
        }, 500); // Imposta un timeout per nascondere il div dopo l'animazione
    }

    count++;
    console.log('contatore =', count);
    console.log(isCountEven);
}