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