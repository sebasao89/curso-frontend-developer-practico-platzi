const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburguesa = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMenuHarburguesa);
menuCarrito.addEventListener('click', toggleMenuCarrito);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMenuHarburguesa() {
    if (!aside.classList.contains('inactive')) {
        toggleMenuCarrito()
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleMenuCarrito() {
    if (!mobileMenu.classList.contains('inactive')) {
        toggleMenuHarburguesa()
    }
    aside.classList.toggle('inactive')
}