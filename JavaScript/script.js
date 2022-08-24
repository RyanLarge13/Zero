//variables
const lines = document.querySelectorAll('span');
const navToggle = document.querySelector('.toggle');
const navigation = document.querySelector('nav');
const h1 = document.querySelector('.sec-1 h1');
const secs = document.querySelectorAll('.sec');

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

//event listeners
navToggle.addEventListener('click', toggleNav);