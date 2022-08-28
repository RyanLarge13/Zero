//variables
const lines = document.querySelectorAll("span");
const navToggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");
const form = document.querySelector('form');
const yourName = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const message = document.getElementById('message');

//mobile hamburger menu
const toggleNav = () => {
  lines.forEach((line) => line.classList.toggle("nav"));
  navigation.classList.toggle("scale");
};

//These funtions handle what to do when submitting the form
const handleForm = (e) => {
  e.preventDefault();
  form.reset();
};

//These functions handle what to do with form validation
const validate = (e) => {
  let id = e.target.id;
  
};

//event listeners
navToggle.addEventListener("click", toggleNav);
form.addEventListener('submit', handleForm);
yourName.addEventListener('keyup', validate);
email.addEventListener('keyup', validate);
tel.addEventListener('keyup', validate);
message.addEventListener('keyup', validate);
