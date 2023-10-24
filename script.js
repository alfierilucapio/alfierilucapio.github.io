let hidden = false;
let count = 0;
let isOpen = false;

function mostraDiv() {
    let isCountEven = count % 2 === 0;

    if(isCountEven){
        var div = document.getElementById('mioDiv');
        div.style.display = 'block';
    } else {
        var div = document.getElementById('mioDiv');
        div.style.display = 'none';
    }

    var mioDiv = document.getElementById("mioDiv");
    mioDiv.classList.remove("animazione"); // Rimuove la classe animazione
    mioDiv.offsetWidth; // Forza un reflow per applicare nuovamente lo stile
    mioDiv.classList.add("animazione"); // Aggiunge nuovamente la classe animazione

    isOpen = !isOpen;

    if(isOpen){
        mioDiv.style.left = "0";
        mioDiv.style.opacity = "1";
        mioDiv.style.pointerEvents = "all";
        hidden = false;
    } else {
        mioDiv.style.left = "-100%";
        mioDiv.style.opacity = "0";
        mioDiv.style.pointerEvents = "none";
        mioDiv.style.transition ="left 0.5s ease-in-out, opacity 0.5s ease-in-out";
        hidden = true;
    }

    count ++;
    console.log('contatore =', count);
    console.log(isCountEven);
}