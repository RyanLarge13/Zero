import { teeProducts } from "../constants/teeProducts.js";
import { sweaterProducts } from "../constants/sweaterProducts.js";

const options = document.querySelectorAll("aside ul li ul li");

const filter = (e) => {
  const option = e.target.innerHTML;
  const allTees = Array.from(teeProducts);
  for (let i = 0; i < allTees.length; i++) {
    console.log(allTees[i].sizes);
  }
};

options.forEach((option) => {
  option.addEventListener("click", filter);
});
