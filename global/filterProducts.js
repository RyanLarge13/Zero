import { teeProducts } from "../constants/teeProducts.js";
import { sweaterProducts } from "../constants/sweaterProducts.js";
import {add, view} from '../JavaScript/tees.js'

const options = document.querySelectorAll("aside ul li ul li");
const filteredArray = [];

const filter = (e) => {
  const option = e.target.innerHTML.toLowerCase();
  const allTees = Array.from(teeProducts);
  for (let i = 0; i < allTees.length; i++) {
    if (allTees[i].sizes.includes(option)) {
      filteredArray.push(allTees[i].title);
    }
    if (allTees[i].genders.includes(option)) {
      filteredArray.push(allTees[i].title);
    }
    if (allTees[i].colors.includes(option)) {
      filteredArray.push(allTees[i].title);
    }
    removeAndReplace();
  }
};

const removeAndReplace = () => {
  const allItems = document.querySelectorAll(".card");
  const container = document.querySelector(".grid");
  allItems.forEach((card) => {
    card.remove();
  });
  filteredArray.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2 class="title">${product}</h2><div class="foot"><button class="buy">Buy</button><button class="view">View</button></div>`;
    container.appendChild(card);
  });
  const buyBtns = document.querySelectorAll(".buy");
  const viewBtns = document.querySelectorAll(".view");
  buyBtns.forEach((btn) => btn.addEventListener("click", add));
  viewBtns.forEach((btn) => btn.addEventListener("click", view));
};

options.forEach((option) => {
  option.addEventListener("click", filter);
});
