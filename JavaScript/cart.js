import { teeProducts } from "../constants/teeProducts.js";
import { sweaterProducts } from "../constants/sweaterProducts.js";

const allProducts = teeProducts.concat(sweaterProducts);

//variables
const clearCartBtn = document.querySelector(".clear-cart");
const indicator = document.querySelector(".indicator");
const shopingCartIcon = document.querySelector(".fa-cart-shopping");
const container = document.querySelector(".product-container");
const checkout = document.querySelector(".checkout");
const alert = document.querySelector(".alert");
const closeBtn = document.querySelector(".close");
const shade = document.querySelector(".shade");
let products = [];
let quantityAmount = 1;

//clearing the cart and local storage functions
const clearStorage = (e) => {
  e.preventDefault();
  localStorage.clear();
  clearCart();
};

const clearCart = () => {
  products = [];
  window.location.reload();
};

//product functionality functions
const inc = (e) => {
  const quantity = e.target.previousElementSibling;
  const title =
    e.target.parentElement.parentElement.firstElementChild.innerHTML;
  allProducts.forEach((elem) => {
    if (elem.title === title) {
      const price = elem.price;
      let total = e.target.parentElement.parentElement.children[1];
      let amount = Number(quantity.innerHTML);
      amount++;
      quantity.innerHTML = amount;
      total.innerHTML = `$${price * Number(amount)}`;
    }
  });
};

const dec = (e) => {
  const quantity = e.target.nextElementSibling;
  const title =
    e.target.parentElement.parentElement.firstElementChild.innerHTML;
  allProducts.forEach((elem) => {
    if (elem.title === title) {
      const price = elem.price;
      let total = e.target.parentElement.parentElement.children[1];
      let amount = Number(quantity.innerHTML);
      if (amount === 1) return;
      amount--;
      quantity.innerHTML = amount;
      total.innerHTML = `$${price * Number(amount)}`;
    }
  });
};

const removeProduct = (e) => {
  container.remove(e.target.parentElement.previousElementSibling);
};

//beginning of the product display
const createElements = (title) => {
  const container = document.querySelector(".product-container");
  allProducts.forEach((elem) => {
    if (elem.title === title) {
      const product = document.createElement("div");
      product.className = "product";
      product.innerHTML = `
        <h2>${elem.title}</h2>
        <h2 class="price">$${elem.price}</h2>
        <div class="foot">
        <i class="down fa-solid fa-circle-minus"></i>
        <p class="quantity">${quantityAmount}</p>
        <i class="up fa-solid fa-circle-plus"></i>
        </div>
        <div class="danger">Delete</div>`;
      container.appendChild(product);
      addListeners();
    } else {
      return;
    }
  });
};

const addListeners = () => {
  const up = document.querySelectorAll(".up");
  const down = document.querySelectorAll(".down");
  const danger = document.querySelectorAll(".danger");
  danger.forEach((btn) => {
    btn.addEventListener("click", remove);
  });
  up.forEach((btn) => {
    btn.addEventListener("click", inc);
  });
  down.forEach((btn) => {
    btn.addEventListener("click", dec);
  });
};

const remove = (e) => {
  const product = e.target.parentElement;
  const container = document.querySelector(".product-container");
  container.removeChild(product);
  products.splice(products.indexOf(product), 1);
  indicate();
  const title = product.firstElementChild.innerHTML;
  localStorage.removeItem(title);
};

//showing all products
const showProducts = () => {
  let keys = Object.keys(localStorage);
  for (let k = 0; k < localStorage.length; k++) {
    if (localStorage.getItem(keys[k]) !== "product") continue;
    products.push(localStorage.getItem(keys[k]));
    createElements(keys[k]);
  }
  indicate();
};

//cart items count indicator function
const indicate = () => {
  const numOfProducts = products.length;
  indicator.innerHTML = numOfProducts;
  if (numOfProducts === 0) showEmpty();
};

const showEmpty = () => {
  const empty = document.createElement("h1");
  empty.innerHTML = "Your cart is empty..";
  empty.className = "empty";
  document.body.appendChild(empty);
};

//handling checkout
const checkOut = (e) => {
  e.preventDefault();
  if (products.length === 0) {
    alert.style.transform = "translate(-50%, 0)";
    shade.style.opacity = "1";
  } else {
    const elems = document.querySelectorAll(".price");
    let priceArray = [];
    elems.forEach((elem) => {
      const arr = Array.from(elem.innerText);
      const index = arr.indexOf("$");
      if (index > -1) {
        arr.splice(index, 1);
        const prices = Number(arr.join(""));
        priceArray.push(prices);
      }
    });
    const price = priceArray.reduce((a, b) => a + b);
    localStorage.setItem("totalPrice", price);
    window.location = "../HTML/checkout.html";
  }
  closeBtn.addEventListener("click", closeAlert);
};

const closeAlert = () => {
  alert.style.transform = "translate(-50%, -200%)";
  shade.style.opacity = "0";
};

showProducts();

//event listeners
clearCartBtn.addEventListener("click", clearStorage);
checkout.addEventListener("click", checkOut);
