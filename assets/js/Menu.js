let hidden = false;
let count = 0;
let isOpen = false;

function mostraDiv() {
    let isCountEven = count % 2 === 0;
    
    let portfolio = document.getElementById('portfolio');
    let div = document.getElementById('mioDiv');

    if (isCountEven) {
        div.style.display = 'block';
        portfolio.style.display = 'none';
    }

    div.classList.remove("animazione");
    div.offsetWidth; // Forza un reflow
    div.classList.add("animazione");

    isOpen = !isOpen;

    if (isOpen) {
        div.style.right = "0";
        div.style.opacity = "1";
        div.style.pointerEvents = "all";
        hidden = false;
    } else {
        div.style.right = "-100%";
        div.style.opacity = "0";
        div.style.pointerEvents = "none";
        
        portfolio.style.display = 'block';
        setTimeout(() => {
            div.style.display = 'none';
        }, 500); // Imposta un timeout per nascondere il div dopo l'animazione
        hidden = true;
    }

    count++;
    console.log('contatore =', count);
    console.log(isCountEven);
}