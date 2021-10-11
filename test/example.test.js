// IMPORT MODULES under test here:

import { renderProduct } from "../render-product.js";
import { products } from "../products.js";

// import { example } from '../example.js';
const test = QUnit.test;

test('renderProduct should return an HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="product-card"><h2>Necronomicon</h2><img src="./assets/necronomicon.jpg"><p>description of the necronomicon</p><p class="category">supernatural</p><p class="price">$85.00</p><button>add to cart</button></div>';
    const Necronomicon = products[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(Necronomicon).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
