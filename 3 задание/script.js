'use strict';

let cartValue = 0;
let calorieValue = 0;

class ProductList{
  constructor(container = '.fastfood-items__wrap'){
    this.container = container;
    this.goods = [];
    this._fetchProduct();
  }

  _fetchProduct(){
    this.goods = [
      {id: 0, title: 'Большой бургер', price: 100, calorie: 40, img: 'img/big-burger.jpg'},
      {id: 1, title: 'Маленький бургер', price: 50, calorie: 20, img: 'img/burger.jpg'},
      {id: 2, title: 'Сыр', price: 10, calorie: 20, img: 'img/cheese.jpg'},    
      {id: 3, title: 'Салат', price: 20, calorie: 5, img: 'img/lettuce.jpg'},
      {id: 4, title: 'Картофель', price: 15, calorie: 10, img: 'img/fries.jpg'},    
      {id: 5, title: 'Приправа', price: 15, calorie: 0, img: 'img/spice.jpg'}, 
      {id: 6, title: 'Майонез', price: 20, calorie: 5, img: 'img/mayo.jpg'}, 
      ]
  }

  render(){
    const block = document.querySelector(this.container);
    for(let product of this.goods){
      const productObj = new ProductItem(product);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }

  addToCart(){
    const cartBlock = document.querySelector('.fastfood__result');
    const block = document.querySelector(this.container);
    block.addEventListener('click', event => {
      if(event.target.classList.contains('fastfood__item-btn-add')){  
        cartBlock.innerHTML = '';
        let id = event.target.dataset.id;
        let price = this.goods[id].price;
        let calorie = this.goods[id].calorie;
       
        cartValue += price;
        calorieValue += calorie;

        let cart = `
          <div class="fastfood__result-wrap">
          <h3 class="fastfood__result-title">Итого:</h3>
          <span class="fastfood__result-text">${cartValue} рублей</span>
          <span class="fastfood__result-text">${calorieValue} каллорий</span>
          </div>
        `;
        cartBlock.insertAdjacentHTML('beforeend', cart);
      }
      });
  }
}

class ProductItem{
  constructor(product){
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.calorie = product.calorie;
    this.img = product.img;
  }

  render(){
    return `
          <div class="fastfood__item">
          <h3 class="fastfood__item-title">${this.title}</h3>
          <img class="fastfood__item-img" src="${this.img}" alt="">
          <span class="fastfood__item-price">Цена: ${this.price} руб.</span>
          <span class="fastfood__item-calorie">Каллорийность: ${this.calorie} кал.</span>
          <button class="fastfood__item-btn fastfood__item-btn-add" data-id="${this.id}">+</button>
          </div>
    `
  }
}

let list = new ProductList();
list.render();
list.addToCart();