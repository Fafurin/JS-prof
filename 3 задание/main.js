'use strict';

let cartValue = 0;
let calorieValue = 0;

class ProductList{
  constructor(container = '.fastfood-items__wrap'){
    this.container = container;
    this.goods = {};
    this._fetchProduct();
  }

  _fetchProduct(){
    this.goods = {
      '1': {title: 'Большой бургер', price: 100, calorie: 40, img: 'img/big-burger.jpg'},
      '2': {title: 'Маленький бургер', price: 50, calorie: 20, img: 'img/burger.jpg'},
      '3': {title: 'Сыр', price: 10, calorie: 20, img: 'img/cheese.jpg'},    
      '4': {title: 'Салат', price: 20, calorie: 5, img: 'img/lettuce.jpg'},
      '5': {title: 'Картофель', price: 15, calorie: 10, img: 'img/fries.jpg'},    
      '6': {title: 'Приправа', price: 15, calorie: 0, img: 'img/spice.jpg'}, 
      '7': {title: 'Майонез', price: 20, calorie: 5, img: 'img/mayo.jpg'}, 
    }
  }

  render(){
    const block = document.querySelector(this.container);
    for(let key in this.goods){
    const productObj = new ProductItem(this.goods[key]);
    block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }

  addToCart(){
    const block = document.querySelector(this.container);
    let data = {};
    cartValue += this.price;
    calorieValue += this.calorie;
    
    block.addEventListener('click', event => {
      if(event.target.classlist.contains('fastfood__item-btn-add')){
        let id = event.target.dataset.id;
        this.goods[id]
      }
        let id = event.target;
        data = id;
        console.log(this._fetchProduct());
      });
    
    
  }
}

class ProductItem{
  constructor(product){
    this.id = product.key;
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
          <button class="fastfood__item-btn fastfood__item-btn-remove" data-id="${this.id}">-</button>
          <button class="fastfood__item-btn fastfood__item-btn-add" data-id="${this.id}">+</button>
          </div>
    `
  }

}

let list = new ProductList();
list.render();
//list.addToCart();
