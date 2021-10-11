import { renderProduct } from './render-product.js';
import { products } from './products.js';


const productList = document.getElementById('product-list');

for (let item of products){
    const productCard = renderProduct(item);
    productList.append(productCard);
}