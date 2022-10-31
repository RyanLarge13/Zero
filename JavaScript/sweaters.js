import { sweaterProducts } from "../constants/sweaterProducts.js";

//variables
const listParents = document.querySelectorAll("aside ul li");
const buyBtns = document.querySelectorAll(".buy");
const indicator = document.querySelector(".indicator");
const alert = document.querySelector(".alert");
const shade = document.querySelector(".shade");
const products = [];

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

const createElements = () => {
  const container = document.querySelector(".grid");
  sweaterProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2 class="title">${product.title}</h2><div class="foot"><button class="buy">Buy</button><button class="view">View</button></div>`;
    container.appendChild(card);
  });
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

showProducts();
createElements();

//event listeners
listParents.forEach((item) => item.addEventListener("click", openNav));
buyBtns.forEach((btn) => btn.addEventListener("click", add));
