import { teeProducts } from "../constants/teeProducts.js";

//variables
const lines = document.querySelectorAll("span");
const navToggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");
const listParents = document.querySelectorAll("aside ul li");
//const buyBtns = document.querySelectorAll(".buy");
//const viewBtns = document.querySelectorAll(".view");
const indicator = document.querySelector(".indicator");
const alert = document.querySelector(".alert");
const shade = document.querySelector(".shade");
const products = [];

//mobile hamburger menu
const toggleNav = () => {
  lines.forEach((line) => line.classList.toggle("nav"));
  navigation.classList.toggle("scale");
};

const createElements = () => {
  const container = document.querySelector(".grid");
  teeProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2 class="title">${product.title}</h2><div class="foot"><button class="buy">Buy</button><button class="view">View</button></div>`;
    container.appendChild(card);
  });
  const buyBtns = document.querySelectorAll(".buy");
  const viewBtns = document.querySelectorAll(".view");
  addListeners(buyBtns, viewBtns);
};

const addListeners = (buyBtns, viewBtns) => {
  buyBtns.forEach((btn) => btn.addEventListener("click", add));
  viewBtns.forEach((btn) => btn.addEventListener("click", view));
};

const openNav = (e) => {
  const children = e.target.firstElementChild;
  children.classList.toggle("scale");
  if (children.classList.contains("scale")) {
    setTimeout(() => {
      children.style.transition = "250ms ease-in-out";
      children.style.opacity = "1";
    }, 100);
  } else {
    setTimeout(() => {
      children.style.transition = "none";
      children.style.opacity = "0";
    }, 1);
  }
};

//These functions add a product to an array
const add = (e) => {
  const title = e.target.parentElement.previousElementSibling.innerHTML;
  localStorage.setItem(title, "product");
  showAddedToCart(title);
  products.push(title);
  indicate();
};

const showAddedToCart = async (title) => {
  alert.style.transform = "translate(-50%, 0)";
  alert.innerHTML = `You have successfully added ${title} to your cart`;
  shade.style.opacity = "1";
  setTimeout(() => {
    alert.style.transform = "translate(-50%, -200%)";
    shade.style.opacity = "0";
  }, 3000);
};

const indicate = () => {
  indicator.innerHTML = products.length;
};

const showProducts = () => {
  let keys = Object.keys(localStorage);
  for (let k = 0; k < localStorage.length; k++) {
    if (localStorage.getItem(keys[k]) !== "product") continue;
    products.push(localStorage.getItem(keys[k]));
  }
  indicate();
};

const view = (e) => {
  const title =
    e.target.parentElement.parentElement.firstElementChild.innerHTML;
  teeProducts.forEach((elem) => {
    if (elem.title === title) {
      createView(elem);
    }
  });
};

const createView = (elem) => {
  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = `<h2>${elem.title}</h2><p>${elem.description}</p>`;
  info.style.transform = 'translateY(0)';
};

showProducts();
createElements();

//event listeners
navToggle.addEventListener("click", toggleNav);
listParents.forEach((item) => item.addEventListener("click", openNav));
//buyBtns.forEach((btn) => btn.addEventListener("click", add));
//viewBtns.forEach((btn) => btn.addEventListener("click", view));
