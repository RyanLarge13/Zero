//variables
const lines = document.querySelectorAll("span");
const navToggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");
const clearCartBtn = document.querySelector('.clear-cart');
const indicator = document.querySelector(".indicator");
const shopingCartIcon = document.querySelector(".fa-cart-shopping");
const container = document.querySelector(".product-container");
let products = [];

//mobile hamburger menu
const toggleNav = () => {
  lines.forEach((line) => line.classList.toggle("nav"));
  navigation.classList.toggle("scale");
};

//clearing the cart and local storage functions
const clearStorage = () => {
  localStorage.clear();
  clearCart();
};

const clearCart = () => {
  products = [];
  window.location.reload();
};

//cart items count indicator function
const indicate = () => {
  const items = localStorage.getItem("item");
  products.push(items);
  indicator.innerHTML = products.length;
};

//beginning of the product display
const createElements = () => {
  const product = document.createElement("div");
  const foot = document.createElement("div");
  const quantity = document.createElement("div");
  const up = document.createElement("button");
  const down = document.createElement("button");
  const danger = document.createElement("button");
  const count = document.createElement("h2");
  danger.className = "danger";
  down.className = "down";
  up.className = "up";
  quantity.className = "quantity";
  foot.className = "foot";
  product.className = "product";
  const component = [product, foot, quantity, up, down, count, danger];
  append(component);
};

const append = (elementArray) => {
  elementArray[0].appendChild(elementArray[1]);
  elementArray[1].appendChild(elementArray[2]);
  elementArray[2].appendChild(elementArray[3]);
  elementArray[2].appendChild(elementArray[5]);
  elementArray[2].appendChild(elementArray[4]);
  elementArray[1].appendChild(elementArray[6]);
  const product = elementArray[0];
  container.appendChild(product);
};


//showing all products
const showProducts = () => {
  const items = localStorage.getItem('item');
  if (!items) return;
  products.push(items);
  products.forEach((item) => {
    createElements();
  });
};

indicate();
showProducts();

//event listeners
navToggle.addEventListener('click', toggleNav);
clearCartBtn.addEventListener('click', clearStorage);