import { renderProduct } from '../render-product.js';
import { products } from '../data/products.js';
import { addItem, clearCart, findByID, getCart } from '../utils.js';

const test = QUnit.test;

test('renderProduct should return an HTML snippet', (expect) => {
    const expected = '<div class="product-card"><h2>Necronomicon</h2><img src="./assets/necronomicon.jpg"><p class="description">Hardcover grimoire. Accounts of 106 ancient deities and their respective summoning spells, preferred offerings, and other vital information for successful communication.</p><p class="category">supernatural</p><p class="price">185.00</p><button id="1" class="buy-button">add to cart</button></div>';
    const Necronomicon = products[0];
    const actual = renderProduct(Necronomicon).outerHTML;

    expect.equal(actual, expected);
});

test('findById should return the item matching the ID', (expect)=>{
    const expected = {
        id: '4',
        name: 'Werewolf Drool',
        image: './assets/werewolf-drool.jpg',
        description: 'Product collected from fully consenting, independently contracted werewolves, restrained for safety purposes during extraction. Each glass vial contains approximately 100mg of saliva.',
        category: 'ingredients',
        price: `785.00` 
    };

    const actual = findByID('4', products);
    expect.deepEqual(actual, expected);
});

test('getCart should return the cart if it exists', (expect)=>{
    const fakeCart = [
        { id: '4', qty: 2 },
        { id: '3', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    const cart = getCart();

    expect.deepEqual(cart, fakeCart);
});

// test('getCart should return an empty array if the cart does not exist', (expect)=> {
//     const cart = getCart();
    
//     localStorage.removeItem('CART');
//     expect.deepEqual(cart, []);
// });

test('addItem should increment the quantity of an item in the cart', (expect)=>{
    const fakeCart = [
        { id: '4', qty: 2 },
        { id: '3', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    addItem('4');
    const cart = getCart();
    const expected = [
        { id: '4', qty: 3 },
        { id: '3', qty: 3 }
    ];

    expect.deepEqual(cart, expected);
});

test('addItem should add an item if its not already there', (expect) =>{
    localStorage.removeItem('CART');
    
    const expected = [{ id: '1', qty: 1 }];
    
    // act
    addItem('1');
    const cart = getCart();

    expect.deepEqual(cart, expected);

});

test('clearCart should clear the cart', (expect) => {
    const fakeCart = [
        { id: '4', qty: 2 },
        { id: '3', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    clearCart();
    const cart = getCart();
    const expected = [];

    expect.deepEqual(cart, expected);
    // oh my god I did it.
});