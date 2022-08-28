//variables
const lines = document.querySelectorAll("span");
const navToggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");
const form = document.querySelector('form');
const name = document.querySelector('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const message = document.getElementById('message');

//mobile hamburger menu
const toggleNav = () => {
  lines.forEach((line) => line.classList.toggle("nav"));
  navigation.classList.toggle("scale");
};

//event listeners
navToggle.addEventListener("click", toggleNav);
