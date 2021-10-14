export function renderProduct(products){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productName = document.createElement('h2');
    productName.textContent = products.name;

    const img = document.createElement('img');
    img.src = products.image;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = products.description;

    const categoryList = document.createElement('p');
    categoryList.classList.add('category');
    categoryList.textContent = products.category;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$` + products.price;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'add to cart';
    buyButton.id = products.id;
    buyButton.classList.add('buy-button');

    let totalQty = 0;

    buyButton.addEventListener('click', ()=>{
        totalQty++;
        productQty.textContent = totalQty + ' in cart';
    });

    const productQty = document.createElement('p');
    productQty.classList.add('quantity');

    productCard.append(productName, img, description, categoryList, price, productQty, buyButton);
    return productCard;
}
