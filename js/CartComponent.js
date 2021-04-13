Vue.component('cart', {
  props: ['cartItems', 'visibility'],
  template: `
              <div class="shopping-cart" v-if="visibility">
                <div class="shopping-cart__items-wrapper">
                  <cart-item v-for="item of cartItems"
                  :key="item.id"
                  :cart-item="item"></cart-item>
                </div>
                <div class="shopping-cart-total-wrap">
                    <span class="shopping-cart__total">Total</span>
                    <span class="shopping-cart__total shopping-cart__total-value">{{ $root.cartTotal }}</span>
                </div>
              </div>
            `

});

Vue.component('cart-item', {
  props: ['cartItem'],
  template: `
            <div class="shopping-cart__item">
                <div class="shopping-cart__item-img-wrap">
                  <img class="shopping-cart__item-img" :src="cartItem.img" alt="">
                </div>
                <div class="shopping-cart__item-text"> 
                    <span class="shopping-cart__item-title shopping-cart__item-text-db">{{ cartItem.name }}</span> 
                    <span class="shopping-cart__item-price shopping-cart__item-text-db">{{ cartItem.quantity }} x $ {{ cartItem.price }}</span> 
                </div>
                <button class="shopping-cart__del-item" @click="$parent.$emit('remove', cartItem)"></button>
            </div>
            `

})