let products = [];
let keys = Object.keys(localStorage);

for (let k = 0; k < localStorage.length; k++) {
  if (localStorage.getItem(keys[k]) !== "product") continue;
  products.push(keys[k]);
}

const spliceProducts = () => {
  products.forEach((item) => {
    const quantity = item.split(" ").splice(2).join();
    const product = item.split(" ").splice(0, 2).join(" ");
  });
  showInfo();
};

const showInfo = () => {
  const totalPrice = localStorage.getItem("totalPrice");
  document.querySelector(".total").innerHTML = totalPrice;
};

spliceProducts();
