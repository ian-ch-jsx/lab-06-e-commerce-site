// import { products } from '../data/products.js';
import { addProduct, clearInventory } from '../utils.js';

const form = document.getElementById('add-form');
const clearButton = document.getElementById('clear-inventory');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(form);
    const newProduct = {
        id: data.get('id'),
        name: data.get('name-input'),
        image: data.get('image-input'),
        description: data.get('description-input'),
        category: data.get('category-input'),
        price: Number(data.get('price-input'))
    };

    addProduct(newProduct);
    alert('new product listed!');
    document.getElementById('add-form').reset();
});

clearButton.addEventListener('click', ()=>{
    clearInventory();
    alert('cleared inventory items');
});
