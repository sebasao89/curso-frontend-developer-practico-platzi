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


const productList = []

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Computador",
    price: 530,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});