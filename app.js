import { renderProduct } from './render-product.js';
import { addItem, getProducts } from './utils.js';

const productList = document.getElementById('product-list');

const products = getProducts();

for (let item of products){
    const productCard = renderProduct(item);
    productList.append(productCard);
}

const buyButtons = document.querySelectorAll('.buy-button');
for (let buyBtn of buyButtons){
    buyBtn.addEventListener('click', () => {
        addItem(buyBtn.id);
    });
}
