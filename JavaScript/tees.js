//variables
const lines = document.querySelectorAll("span");
const navToggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");
const listParents = document.querySelectorAll('aside ul li');
const buyBtns = document.querySelectorAll('.buy');
const indicator = document.querySelector('.indicator');
const alert = document.querySelector('.alert');
const shade = document.querySelector('.shade');
const products = [];

//mobile hamburger menu
const toggleNav = () => {
  lines.forEach((line) => line.classList.toggle("nav"));
  navigation.classList.toggle("scale");
};

const openNav = (e) => {
  const children = e.target.firstElementChild;
  children.classList.toggle('scale');
  if (children.classList.contains('scale')) {
    setTimeout(() => {
      children.style.transition = '250ms ease-in-out';
      children.style.opacity = '1';
    }, 100);
  }
  else {
    setTimeout(() => {
      children.style.transition = 'none';
      children.style.opacity = '0';
    }, 1);
  }
};

//These functions add a product to an array
const add = (e) => {
  const title = e.target.parentElement.previousElementSibling.innerHTML;
  const format = title.replace(' ', '').toLowerCase();
  localStorage.setItem(title, format);
  showAddedToCart(title);
  products.push(title);
  indicate();
};

const showAddedToCart = async (title) => {
  alert.style.transform = "translate(-50%, 0)";
  alert.innerHTML = `You have successfully added ${title} to your cart`;
  shade.style.opacity = "1";
  setTimeout(() => {
    alert.style.transform = 'translate(-50%, -200%)';
    shade.style.opacity = '0';
  }, 3000);
};

const indicate = () => {
  indicator.innerHTML = products.length;
};

const showProducts = () => {
  let keys = Object.keys(localStorage);
  for (let k = 0; k < localStorage.length; k++) {
    if (localStorage.getItem(keys[k]) === "true") continue;
    products.push(localStorage.getItem(keys[k]));
  }
  indicate();
};

showProducts();

//event listeners
navToggle.addEventListener("click", toggleNav);
listParents.forEach((item) => item.addEventListener('click', openNav));
buyBtns.forEach((btn) => btn.addEventListener('click', add));