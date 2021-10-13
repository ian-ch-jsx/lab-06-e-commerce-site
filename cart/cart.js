import { products } from '../data/products.js';
import { calculateOrderTotal, findByID, toUSD, getCart } from '../utils.js';
import { renderLineItem } from '../render-line-items.js';

const cart = getCart();
const tbody = document.getElementById('table-body');

for (let cartItem of cart){
    const productsData = findByID(cartItem.id, products);

    const tr = renderLineItem(cartItem, productsData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, products);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', ()=>{
    alert('A raven will arrive to collect payment and deliver your goods within the hour.');
    localStorage.removeItem('CART');
    window.location.replace('..');
});