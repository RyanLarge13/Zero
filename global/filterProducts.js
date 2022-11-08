import { teeProducts } from "../constants/teeProducts.js";
import { sweaterProducts } from "../constants/sweaterProducts.js";

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
  };
};

options.forEach((option) => {
  option.addEventListener("click", filter);
});
