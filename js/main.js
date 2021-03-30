'use strict';

class ProductList {
    constructor(container = '.fetured-items__items-wrapper'){
        this.container = container;
        this.goods = [];
        this._fetchProduct();
    }

    _fetchProduct(){
        this.goods = [
            {id: 1, title: 'Mango People T-shirt', price: 41.90, img: 'img/fetured-item-1.jpg'},
            {id: 2, title: 'Avocado People T-shirt', price: 52.90},
            {id: 3, title: 'Banana People T-shirt', price: 63.50, img: 'img/fetured-item-3.jpg'},
            {id: 4, title: 'Pineapple People T-shirt', price: 54.90, img: 'img/fetured-item-4.jpg'},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    calcTotalPrice(){
        let totalPrice = 0;
        this.goods.forEach(product => {
            totalPrice += product.price;
        });
        console.log(totalPrice.toFixed(2));
    }
}

class ProductItem{
    constructor(product, img = 'img/no_photo.jpg'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img || img;
    }

    render(){
        return `<div class="fetured-items__item">
                <div class="fetured-items__items-add-to-cart-btn_wrapper">
                    <button class="fetured-items__items-add-to-cart-btn">Add to&nbsp;Cart</button>
                </div> 
                <img class="fetured-items__item-img" src="${this.img}" alt="">
                <div class="fetured-items__item-text"> 
                    <span class="fetured-items__item-title fetured-items__item-text-db">${this.title}</span> 
                    <span class="fetured-items__item-price fetured-items__item-text-db">$${this.price}</span> 
                </div>
                </div>`
    }
}

class Cart {

    render(){

    }

    clear(){
        
    }

}

class CartItem {

    addToCart(){

    }

    removeFromCart(){
        
    }

}

let list = new ProductList();
list.render();
list.calcTotalPrice();



