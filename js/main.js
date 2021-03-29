const products = [
    {id: 1, title: 'Mango People T-shirt', price: '$51.00', img: 'img/fetured-item-1.jpg'},
    {id: 2, title: 'Avocado People T-shirt', price: '$52.00', img: 'img/fetured-item-2.jpg'},
    {id: 3, title: 'Banana People T-shirt', price: '$53.00', img: 'img/fetured-item-3.jpg'},
    {id: 4, title: 'Pineapple People T-shirt', price: '$54.00', img: 'img/fetured-item-4.jpg'},
];
//Функция для формирования верстки каждого товара
const renderProduct = item => {
    return `<div class="fetured-items__item">
                <div class="fetured-items__items-add-to-cart-btn_wrapper">
                    <button class="fetured-items__items-add-to-cart-btn">Add to&nbsp;Cart</button>
                </div> 
                <img class="fetured-items__item-img" src="${item.img}" alt="">
                <div class="fetured-items__item-text"> 
                    <span class="fetured-items__item-title fetured-items__item-text-db">${item.title}</span> 
                    <span class="fetured-items__item-price fetured-items__item-text-db">${item.price}</span> 
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.fetured-items__items-wrapper').innerHTML = productsList.join('');
};

renderPage(products);







