import { toUSD } from './utils.js';

export function renderLineItem(cartItem, productsData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = productsData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = productsData.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    // tdTotal.textContent = cartItem.qty * productsData.price;
    const total = cartItem.qty * productsData.price;
    tdTotal.textContent = toUSD(total);

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}
