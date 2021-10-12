import { products } from '../data/products.js';
import { cart } from '../data/cart-data.js';
import { findByID } from '../utils.js';
import { renderLineItem } from '../render-line-items.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart){
    const productsData = findByID(cartItem.id, products);

    const tr = renderLineItem(cartItem, productsData);
    tbody.appendChild(tr);
}