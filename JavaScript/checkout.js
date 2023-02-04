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
    createProduct(quantity, product);
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem(item);
      localStorage.setItem(item.split(" ").splice(0, 2).join(" "), "product");
    });
  });
  showInfo();
};

const createProduct = (quantity, product) => {
  const parent = document.querySelector(".mini-product-container");
  const miniProduct = document.createElement("div");
  miniProduct.innerHTML = `<div>
  <h2>${product}</h2>
  <p>${quantity}</p>
</div>`;
  parent.appendChild(miniProduct);
};

const showInfo = () => {
  const totalPrice = localStorage.getItem("totalPrice");
  document.querySelector(".total").innerHTML = totalPrice;
};

spliceProducts();
