class Header{

  handlerOpenShoppingPage(){
    shoppingPage.render();
  }

  render(count){
    const html = `
      <div class="header-wrap container" onclick="headerPage.handlerOpenShoppingPage();">
        <button class="header-cart"><img src="img/cart--pink.png" alt="">
          ${count}
        </button>
      </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }

}

const headerPage = new Header();


