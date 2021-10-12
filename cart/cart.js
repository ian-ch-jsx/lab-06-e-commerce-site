import { products } from '../data/products.js';
import { cart } from '../data/cart-data.js';
import { findByID } from '../utils.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart){
    const productsData = findByID(cartItem.id, products);

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = productsData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$` + productsData.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = `$` + cartItem.qty * productsData.price + '.00';

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}