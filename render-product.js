export function renderProduct(products){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productName = document.createElement('h2');
    productName.textContent = products.name;

    const img = document.createElement('img');
    img.src = products.image;

    const categoryList = document.createElement('p');
    categoryList.classList.add('category');
    categoryList.textContent = products.category;

    productCard.append(productName, img);
    return productCard;
}