//variables
const lines = document.querySelectorAll("span");
const navToggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");
const clearCartBtn = document.querySelector('.clear-cart');
const indicator = document.querySelector(".indicator");
const shopingCartIcon = document.querySelector(".fa-cart-shopping");
const container = document.querySelector(".product-container");
const checkout = document.querySelector(".checkout");
const alert = document.querySelector('.alert');
const closeBtn = document.querySelector('.close');
const shade = document.querySelector('.shade');
let products = [];
let quantityAmount = 0;

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

//product functionality functions
const inc = (elem) => {
	quantityAmount++;
	elem.innerHTML = quantityAmount;
};

const dec = (elem) => {
	if (quantityAmount === 0) return;
	quantityAmount--;
	elem.innerHTML = quantityAmount;
};

const removeProduct = (e) => {
	container.remove(e.target.parentElement.previousElementSibling);
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
  up.innerText = '+';
  down.innerText = '-';
  danger.innerHTML = 'Clear';
  quantity.innerHTML = quantityAmount;
  const component = [product, foot, quantity, up, down, count, danger];
  append(component);
};

const append = (elementArray) => {
  elementArray[0].appendChild(elementArray[1]);
  elementArray[1].appendChild(elementArray[2]);
  elementArray[2].appendChild(elementArray[4]);
  elementArray[2].insertAdjacentElement('afterbegin',elementArray[5]);
  elementArray[2].appendChild(elementArray[3]);
  elementArray[1].appendChild(elementArray[6]);
  const product = elementArray[0];
  container.appendChild(product);
};


//showing all products
const showProducts = () => {
  let keys = Object.keys(localStorage);
  for (let k = 0; k < localStorage.length; k++) {
    if (localStorage.getItem(keys[k]) === 'true') continue;
    products.push(localStorage.getItem(keys[k]));
  }
  indicate();
  products.forEach((item) => {
    createElements();
  });
};

//cart items count indicator function
const indicate = () => {
  const numOfProducts = products.length;
  indicator.innerHTML = numOfProducts;
  if (numOfProducts === 0) showEmpty();
};

const showEmpty = () => {
  const empty = document.createElement('h1');
  empty.innerHTML = 'Your cart is empty..'
  empty.className = 'empty';
  document.body.appendChild(empty);
};

//handling checkout
const checkOut = () => {
  if (products.length === 0) {
    alert.style.transform = 'translate(-50%, 0)';
    shade.style.opacity = '1';
  } 
  else {
    window.location = '../HTML/checkout.html';
  }
  closeBtn.addEventListener('click', closeAlert);
};

const closeAlert = () => {
  alert.style.transform = 'translate(-50%, -200%)';
  shade.style.opacity = "0";

};
 
showProducts();

//event listeners
navToggle.addEventListener('click', toggleNav);
clearCartBtn.addEventListener('click', clearStorage);
checkout.addEventListener("click", checkOut);
