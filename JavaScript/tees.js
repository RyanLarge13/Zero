import { teeProducts } from "../constants/teeProducts.js";

//variables
const main = document.querySelector("main");
const indicator = document.querySelector(".indicator");
const alert = document.querySelector(".alert");
const shade = document.querySelector(".shade");
const products = [];

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

//These functions add a product to an array
export const add = (e) => {
  const title = e.target.parentElement.previousElementSibling.innerHTML;
  const has = localStorage.getItem(title);
  if (has !== null)
    return showAddedToCart(`You have already added ${title} to your cart.`);
  else {
    localStorage.setItem(title, "product");
    showAddedToCart(
      `You have successfully added ${title} to your cart <br/> <a href="cart.html">ViewCart</a>`
    );
    products.push(title);
    indicate();
  }
};

const showAddedToCart = async (title) => {
  alert.style.transform = "translate(-50%, 0)";
  alert.innerHTML = title;
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

export const view = (e) => {
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
  info.innerHTML = `<i class="fa-solid fa-xmark close-view"></i><h2>${
    elem.title
  }</h2><p>${elem.description}</p>${
    elem.featured ? "<h4>Special Offer!" : "<hr>"
  }<h3>$${elem.price}</h3>`;
  main.appendChild(info);
  setTimeout(() => {
    info.style.opacity = "1";
  }, 10);
  const close = document
    .querySelector(".close-view")
    .addEventListener("click", () => {
      info.style.opacity = "0";
      setTimeout(() => {
        main.removeChild(info);
      }, 350);
    });
};

showProducts();
createElements();
