const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburguesa = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMenuHarburguesa);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMenuHarburguesa() {
    mobileMenu.classList.toggle('inactive')
}