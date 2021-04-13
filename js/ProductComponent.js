Vue.component('products', {
  props: ['products'],
  template: `
            <div class="fetured-items__items-wrapper">
              <product v-for="item of products"
              :key="item.id"
              :product="item"></product>
            </div>
            `
});

Vue.component('product', {
  props: ['product'],
  template: `
            <div class="fetured-items__item">
                <div class="fetured-items__items-add-to-cart-btn_wrapper">
                    <button class="fetured-items__items-add-to-cart-btn" @click="$root.addProduct(product)">Add to Cart</button>
                </div> 
                <img class="fetured-items__item-img" :src="product.img" alt="">
                <div class="fetured-items__item-text"> 
                    <span class="fetured-items__item-title fetured-items__item-text-db">{{ product.name }}</span> 
                    <span class="fetured-items__item-price fetured-items__item-text-db">$ {{ product.price }}</span> 
                </div>
            </div>
  `
}) 