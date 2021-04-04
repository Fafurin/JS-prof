function render(){
  let productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsItem.render();
}

const productsLink = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

let CATALOG = [];

fetch(productsLink)
  .then(result => result.json())
  .then(body => {
    CATALOG = body;
    render();
  })
  .catch(error => {
    console.log(error);
  });

