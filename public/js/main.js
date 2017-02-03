
function burgerFunction(x) {
    x.classList.toggle("change");
    var b = document.getElementsByClassName('mobileBurger');
    b[0].classList.toggle("flipFlop");
    var c = document.getElementsByClassName('header-nav');
    c[0].classList.toggle("header-nav-close");
}
