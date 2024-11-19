window.addEventListener('scroll', function () {
    var navbar = document.getElementById('#navbar');
    var targetDiv = document.querySelector('.target-div');
    var targetPosition = targetDiv.getBoundingClientRect().top;

    if (targetPosition <= 0) {
        navbar.classList.remove('transparent');
        navbar.classList.add('white');
    } else {
        navbar.classList.remove('white');
        navbar.classList.add('transparent');
    }
});