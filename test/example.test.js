// IMPORT MODULES under test here:

import { renderProduct } from "../render-product.js";
import { product } from "../products.js";

// import { example } from '../example.js';
const test = QUnit.test;

test('renderProduct should return an HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'OUTER HTML';
    const irnBru = sodas[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(irnBru);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
