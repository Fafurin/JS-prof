Vue.component('products-comp', {
  props:['showed','addproduct'],
  template: ` <div class="product__cards-wrapper">
                    <div v-for="product of showed" :key='product.id_product' class="fetured-item">
                      <div class="cart-btn-wrapper">
                        <button class="fetured-item__cart-btn" :id="product.id_product" @click='$emit("addproduct",product)'>Add to&nbsp;Cart</button>
                        <div class="product__btn-wrapper">
                          <button class="product__retweet-btn"></button>
                          <button class="product__heart-btn"></button> 
                        </div>
                      </div>
                      <img class="fetured-item__img" :src="product.img" alt="some img">
                      <div class="fetured-item__text-wrapper"> 
                          <span class="fetured-item__title">{{ product.product_name }}</span> 
                          <span class="fetured-item__price">$ {{ product.price }}</span> 
                      </div>
                    </div>
               </div>
            `
})

