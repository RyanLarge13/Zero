//variables
const lines = document.querySelectorAll('span');
const navToggle = document.querySelector('.toggle');
const navigation = document.querySelector('nav');
const sec1 = document.querySelector('.sec-1');
const sec2 = document.querySelector(".sec-2");
const h1 = document.querySelector('.sec-1 h1');
const h2 = document.querySelector(".sec-1 h2");
const h3 = document.querySelector(".sec-1 h3");
let count = 0;

//mobile hamburger menu
const toggleNav = () => {
    lines.forEach(line => line.classList.toggle('nav'));
    navigation.classList.toggle('scale');
};


//intro
class Display {
    constructor(elem) {
        this.elem = elem;
    }
    on() {
        this.elem.style.opacity = '1';
    }
    off() {
        this.elem.style.opacity = '0';
    }
    displayOn() {
        this.elem.style.display = 'flex';
    }
    displayOff() {
        this.elem.style.display = 'none';
    }
};

//This function is called on an interval. It handles the display properties of all elements via the display class constructor above.
const check = () => {
    if (count === 1) {
        headingOff = new Display(h1).off();
        setTimeout(() => {
            headingOn = new Display(h2).on();      
        }, 1000);
    } 
    if (count === 2) {
        headingOff = new Display(h2).off();
        setTimeout(() => {
            headingOn = new Display(h3).on();
        }, 1000);
    };
    if (count === 3) {
        headingOff = new Display(h3).off();
        setTimeout(() => {
            secOff = new Display(sec1).displayOff();
            secOn = new Display(sec2).displayOn();
        }, 1000);
    }
};

setInterval(() => {
    count++;
    check();
}, 3250);

//event listeners
navToggle.addEventListener('click', toggleNav);