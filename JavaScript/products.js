export const products = [];
const indicator = document.querySelector('.indicator');
const shopingCartIcon = document.querySelector(".fa-cart-shopping");
const container = document.querySelector('product-container');

export const indicate = () => {
    indicator.innerHTML = products.length;
};

const showProducts = () => {
    products.forEach((product) => {
        createElements();
    });
};

const createElements = () => {
    const product = document.createElement('div');
    const foot = document.createElement('div');
    const quantity = document.createElement('div');
    const up = document.createElement('button');
    const down = document.createElement('button');
    const danger = document.createElement('button');
    const count = document.createElement('h2');
    danger.className = 'danger';
    down.className = 'down';
    up.className = 'up';
    quantity.className = 'quantity';
    foot.className = 'foot';
    product.className = 'product';
    const component = [product, foot, quantity, up, down, count, danger];
    append(component);
};

const append = (elementArray) => {
    elementArray[0].appendChild(elementArray[1]);
    elementArray[1].appendChild(elementArray[2]);
    elementArray[2].appendChild(elementArray[3]);
    elementArray[2].appendChild(elementArray[5]);
    elementArray[2].appendChild(elementArray[4]);
    elementArray[1].appendChild(elementArray[6]);
};

if (products !== [] && container !== null) showProducts();
indicate();