const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburguesa = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetailClose = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMenuHarburguesa);
menuCarrito.addEventListener('click', toggleMenuCarrito);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMenuHarburguesa() {
    if (!shoppingCartContainer.classList.contains('inactive')) {
        closeProductDetail()
    }
    if (productDetailContainer.classList.add('inactive')) {
        toggleMenuCarrito()
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleMenuCarrito() {
    if (!mobileMenu.classList.contains('inactive')) {
        toggleMenuHarburguesa()
    }
    if (productDetailContainer.classList.add('inactive')) {
        toggleMenuCarrito()
    }
    shoppingCartContainer.classList.toggle('inactive')
}

function closeProductDetail() {
    if (!productDetailContainer.classList.add('inactive')) {
        toggleMenuCarrito()
    }
    productDetailContainer.classList.add('inactive')
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


function renderProducts(productList) {
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', abrirDetalle)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

function abrirDetalle() {
    productDetailContainer.classList.remove('inactive')
}

renderProducts(productList)