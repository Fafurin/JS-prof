const app = new Vue({
  el: '#app',

  data: {
    catalog: 'productsCatalog.json',
    products: [],
    cartProducts: [],
    cartTotal: 0,
    totalQuantity: 0,
    userSearch: '',
    show: false,
  },

  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .then(data => {
          for(let el of data){
              this.products.push(el);
          }
        })
        .catch(error => {
          console.log(error);
        })
    },

    addProduct(product){
      if (this.cartProducts.includes(product)){
        product.quantity++;
        this.totalQuantity++;
      }else {
        this.cartProducts.push(product);
        this.totalQuantity++;
      }
      this.cartTotal = (this.cartProducts.reduce((accum, item) => accum += +item.price * item.quantity, 0)).toFixed(2);
    },

    delProduct(product){
      if(product.quantity > 1){
        product.quantity--;
        this.totalQuantity--;
      }else {
        this.cartProducts.splice(this.cartProducts.indexOf(product.id),1);
        this.totalQuantity--;
      }
      this.cartTotal = (this.cartProducts.reduce((accum, item) => accum += +item.price * item.quantity, 0)).toFixed(2);
    }
  },

  computed: {
    filterProducts(){
      const regexp = new RegExp(this.userSearch, 'i');
      return this.products.filter(product => {
        return regexp.test(product.name);
      });
    }
  },

  mounted(){
    this.getJson(this.catalog);
  },

})