const tagline = document.querySelector('.tagline');
const pocari = document.querySelector('.pocari img');
const menus = document.querySelectorAll('.menu ul li');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const mobileMenus = document.querySelector('.mobile-menu');
const products = document.querySelectorAll('.product');

function appear(){
    tagline.classList.add('appear');
    setTimeout(function(){
        pocari.classList.add('appear');
    }, 1500)
}

window.onload = function(){
    appear();
    products.forEach(product => {
        return product;
    })
}


const vScroll = window.addEventListener('scroll', function(){
    let x = this.scrollY;
    console.log(x);

    if(x>5 && x<100){
        nav.classList.add('nav-scroll');
    }else if(x>=100 && x<400){
        products[0].classList.add('product-visible');
    }else if(x>=400 && x<700){
        products[1].classList.add('product-visible');
    }else if(x>=700 && x<1100){
        products[2].classList.add('product-visible');
    }else if(x>=1100 && x<1400){
        products[3].classList.add('product-visible');
    }else if(x>=1400 && x<1700){
        products[4].classList.add('product-visible');
    }else if(x>=1700 && x<2100){
        products[5].classList.add('product-visible');
    }else{
        nav.classList.remove('nav-scroll');
    }
})

hamburger.addEventListener('click', function(){
    mobileMenus.classList.toggle('mobile-menu-flex');
})