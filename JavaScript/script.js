import { sweaterProducts } from "../constants/sweaterProducts.js";
import { teeProducts } from "../constants/teeProducts.js";
//variables
const skip = document.querySelector(".skip");
const sec1 = document.querySelector(".sec-1");
const sec2 = document.querySelector(".sec-2");
const sec3 = document.querySelector(".sec-3");
const sec4 = document.querySelector(".sec-4");
const h1 = document.querySelector(".sec-1 h1");
const h2 = document.querySelector(".sec-1 h2");
const h3 = document.querySelector(".sec-1 h3");
const navDots = document.querySelectorAll(".dot");
const rightBtn = document.querySelector(".fa-circle-chevron-right");
const leftBtn = document.querySelector(".fa-circle-chevron-left");
const cards = document.querySelectorAll(".card");
const indicator = document.querySelector(".indicator");
const grid = document.querySelector(".grid");

let count = 0;
let navCount = 0;
let direction;
let products = [];

//localstorage variables and function to check weather or not someone has previously visited and to stop showing the welcome messages

const visited = localStorage.getItem("has visited");

window.addEventListener("DOMContentLoaded", () => {
  if (visited) {
    killSec1();
  } else {
    return;
  }
});

//JS class allowing easy access and readability to changing elements display and opacity.
class Display {
  constructor(elem) {
    this.elem = elem;
  }
  on() {
    this.elem.style.opacity = "1";
  }
  off() {
    this.elem.style.opacity = "0";
  }
  displayOn() {
    this.elem.style.display = "flex";
  }
  displayOff() {
    this.elem.style.display = "none";
  }
}

//This function is called on an interval. It handles the display properties of all elements via the display class constructor above.

const check = () => {
  if (count === 1) {
    new Display(h1).off();
    setTimeout(() => {
      new Display(h2).on();
    }, 1000);
  }
  if (count === 2) {
    new Display(h2).off();
    setTimeout(() => {
      new Display(h3).on();
    }, 1000);
  }
  if (count === 3) {
    new Display(skip).off();
    new Display(h3).off();
    setTimeout(() => {
      new Display(sec1).displayOff();
      new Display(sec2).displayOn();
      setTimeout(() => {
        new Display(sec2).on();
        new Display(skip).displayOff();
        navDots[0].style.backgroundColor = "#fc354c";
        navDots.forEach((dot) => new Display(dot).on());
        new Display(rightBtn).on();
        new Display(leftBtn).on();
      }, 250);
    }, 1000);
  }
};

let time = setInterval(() => {
  count++;
  check();
}, 3250);

//The next 3 functions handle the direction of which way the sections need to get displayed in animation and displays them using the consructor class above.
const killSec1 = () => {
  clearInterval(time);
  const secArray = [sec2, sec3, sec4];
  navDots[0].style.backgroundColor = "#fc354c";
  navDots.forEach((dot) => new Display(dot).on());
  new Display(rightBtn).on();
  new Display(leftBtn).on();
  new Display(sec1).displayOff();
  new Display(skip).displayOff();
  showNextSec(secArray);
};

const resetStyle = (secArray) => {
  navDots.forEach((dot) => (dot.style.backgroundColor = "#fff"));
  secArray.forEach((section) => new Display(section).off());
  setTimeout(() => {
    secArray.forEach((section) => new Display(section).displayOff());
  }, 750);
};

const showNextSec = () => {
  const secArray = [sec2, sec3, sec4];
  resetStyle(secArray);
  setTimeout(() => {
    new Display(secArray[navCount]).displayOn();
    setTimeout(() => {
      new Display(secArray[navCount]).on();
      navDots[navCount].style.backgroundColor = "#fc354c";
    }, 50);
  }, 750);
};

const turnPage = (direction) => {
  if (direction === "right" && navCount === 2) {
    navCount = 0;
    return showNextSec(navCount);
  }
  if (direction === "left" && navCount === 0) {
    navCount = 2;
    return showNextSec(navCount);
  }
  if (direction === "right" && navCount !== 2) {
    navCount++;
    showNextSec(navCount);
  }
  if (direction === "left" && navCount !== 0) {
    navCount--;
    showNextSec(navCount);
  }
};

const showProducts = () => {
  let keys = Object.keys(localStorage);
  for (let k = 0; k < localStorage.length; k++) {
    if (localStorage.getItem(keys[k]) !== "product") continue;
    products.push(localStorage.getItem(keys[k]));
  }
  indicate();
};

const indicate = () => {
  indicator.innerHTML = products.length;
};

const sortAllItems = (e) => {
  const sweaterArr = [];
  const teeArr = [];
  const title = e.target.querySelector("h3").innerHTML;
  sweaterProducts.forEach((item) => {
    item.tags.includes(title) ? sweaterArr.push(item) : null;
  });
  teeProducts.forEach((item) => {
    item.tags.includes(title) ? teeArr.push(item) : null;
  });
  const allProducts = sweaterArr.concat(teeArr);
  allProducts.length < 1
    ? (window.location.href = "http://127.0.0.1:5500/HTML/tees.html")
    : createElements(allProducts);
};

const createElements = (filteredProducts) => {
    //remove cards and add new cards of filtered products with a back button to replace filtered products with original cards
};

showProducts();

//event listeners
skip.addEventListener("click", killSec1);
rightBtn.addEventListener("click", () => {
  direction = "right";
  turnPage(direction);
});
leftBtn.addEventListener("click", () => {
  direction = "left";
  turnPage(direction);
});
navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    navCount = index;
    showNextSec();
  });
});
cards.forEach((card) => {
  card.addEventListener("click", sortAllItems);
});

localStorage.setItem("has visited", "true");
