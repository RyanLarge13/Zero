//variables
const lines = document.querySelectorAll('span');
const navToggle = document.querySelector('.toggle');
const navigation = document.querySelector('nav');
const h1 = document.querySelector('.sec-1 h1');
const h2 = document.querySelector(".sec-1 h2");
const h3 = document.querySelector(".sec-1 h3");
const secs = document.querySelectorAll('.sec');
let count = 0;

//mobile hamburger menu
const toggleNav = () => {
    lines.forEach(line => line.classList.toggle('nav'));
    navigation.classList.toggle('scale');
};


//intro
class Opacity {
    constructor(elem) {
        this.elem = elem;
    }

    on() {
        this.elem.style.opacity = '1';
    }

    off() {
        this.elem.style.opacity = '0';
    }
};

const check = () => {
    if (count === 1) {
        headingOff = new Opacity(h1).off();
        setTimeout(() => {
            headingOn = new Opacity(h2).on();      
        }, 1000);
    } 
    if (count === 2) {
        headingOff = new Opacity(h2).off();
        setTimeout(() => {
            headingOn = new Opacity(h3).on();
        }, 1000);
    };
    if (count === 3) {
        headingOff = new Opacity(h3).off();
        setTimeout(() => {
            // productList = new Opacity(products).on();
        }, 1000);
    }
};

setInterval(() => {
    count++;
    check();
}, 3250);

//event listeners
navToggle.addEventListener('click', toggleNav);