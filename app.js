import { renderProduct } from './render-product.js';
import { products } from './data/products.js';
import { addItem } from './utils.js';

const productList = document.getElementById('product-list');

for (let item of products){
    const productCard = renderProduct(item);
    productList.append(productCard);
}

const buyButtons = document.querySelectorAll('.buy-button');
for (let buyBtn of buyButtons){
    buyBtn.addEventListener('click', () => {
        addItem(buyBtn.id);
        alert('Item added to your list.');
    });
}
