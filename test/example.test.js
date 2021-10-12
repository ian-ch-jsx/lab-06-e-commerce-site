import { renderProduct } from '../render-product.js';
import { products } from '../data/products.js';
import { findByID } from '../utils.js';

const test = QUnit.test;

test('renderProduct should return an HTML snippet', (expect) => {
    const expected = '<div class="product-card"><h2>Necronomicon</h2><img src="./assets/necronomicon.jpg"><p class="description">Hardcover grimoire. Accounts of 106 ancient deities and their respective summoning spells, preferred offerings, and other vital information for successful communication.</p><p class="category">supernatural</p><p class="price">185.00</p><button>add to cart</button></div>';
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
