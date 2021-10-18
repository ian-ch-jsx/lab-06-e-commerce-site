export function findByID(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function calculateOrderTotal(cart, products) {
    let orderTotal = 0;
    for (let item of cart){
        const product = findByID(item.id, products);
        orderTotal = orderTotal + product.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    const cart = getCart();
    const cartItem = findByID(id, cart);

    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

export function clearCart() {
    localStorage.removeItem('CART');
}

import { products } from './data/products.js';

export function getProducts() {
    let lsProducts = localStorage.getItem('PRODUCTS');
    const addedProducts = JSON.parse(lsProducts);

    if (!products){
        const productsString = JSON.stringify(addedProducts);
        localStorage.setItem('PRODUCTS', productsString);
    }
    return addedProducts || products;
}

export function addProduct(newProduct){
    let addedProducts = getProducts();
    
    addedProducts.push(newProduct);

    let productsString = JSON.stringify(addedProducts);
    localStorage.setItem('PRODUCTS', productsString);
}

export function clearInventory(){
    localStorage.clear();
}
