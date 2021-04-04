class Products {
  constructor(){
    this.classNameActive = 'products-item__btn_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
  }

  handleSetLocationStorage(element, id){
    let {pushProduct, products} = localStorageUtil.putProducts(id);

    if (pushProduct){
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    }else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;      
    }

    headerPage.render(products.length);
    
  }

  render(){
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    
    CATALOG.forEach(({id_product, product_name, price}) => {
      let activeClass = '';
      let activeText = '';

      if(productsStore.indexOf(id_product) === -1){
        activeText = this.labelAdd;
      }else{
        activeClass = ' '+this.classNameActive;
        activeText = this.labelRemove;

      }

      htmlCatalog += 
      `<div class="products-item">
                <img class="products-item__img" src="img/no_photo.jpg" alt="">
                <div class="products-text"> 
                    <span class="products-item__title">${product_name}</span> 
                    <span class="products-item__price">${price} руб.</span> 
                    <button class="products-item__btn${activeClass}" onclick="productsItem.handleSetLocationStorage(this, ${id_product});">
                      ${activeText}
                    </button>
                </div>
      </div>`;
    });

    const html = `<div class="products-wrap container">${htmlCatalog}</div>`;

    ROOT_PRODUCTS.insertAdjacentHTML('afterbegin', html);

  }

}

const productsItem = new Products();
