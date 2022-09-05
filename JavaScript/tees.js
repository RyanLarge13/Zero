//imports
import { products, indicate } from "./products.js";

//variables
const lines = document.querySelectorAll("span");
const navToggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");
const listParents = document.querySelectorAll('aside ul li');
const buyBtns = document.querySelectorAll('.buy');

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
  products.push(e.target);
  indicate();
};

//event listeners
navToggle.addEventListener("click", toggleNav);
listParents.forEach((item) => item.addEventListener('click', openNav));
buyBtns.forEach((btn) => btn.addEventListener('click', add));