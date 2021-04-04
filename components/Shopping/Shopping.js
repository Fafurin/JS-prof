class Shopping{

  hadleClear(){
    ROOT_SHOPPING.innerHTML = '';
  }

  render(){
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;

    CATALOG.forEach(({id_product, product_name, price}) => {
      if(productsStore.indexOf(id_product) !== -1){
        htmlCatalog += `
          <div class="shopping-item">
            <span class="shopping-item__title">${product_name}</span>
            <span class="shopping-item__price">${price} руб.</span>
          </div>
        `;
        sumCatalog += price;
      }
    });
    
    const html = `
      <div class="shopping-wrap">
      <button class="shopping__close" onclick="shoppingPage.hadleClear();"></button>
        ${htmlCatalog}
        <div class="shopping-item">
          <span class="shopping-item__title">Сумма:</span>
          <span class="shopping-item__price">${sumCatalog} руб.</span>
        </div>
      </div>
    `;

    ROOT_SHOPPING.innerHTML = html;
  }

}

const shoppingPage = new Shopping();