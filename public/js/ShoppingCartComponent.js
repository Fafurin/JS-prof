Vue.component('shopping-cart',{
    methods: {
        calculateCart() {
            let cartPrice = 0;
            let cart = this.$root.cartGoods[1];
            cart.forEach(el => cartPrice += el.quantity * el.price)
            return cartPrice.toFixed(2);
        },
        deleteItem(id) {
            let remove = this.$root.remove;
            let cart = this.$root.cartGoods[1];
            let find = cart.find(el => el.id_product === id);

            remove(`/api/cart/${id}`,find);
        }
    },
    template: `
       <section class="shopping-cart container">
        <div class="shopping-cart__products">
            <span class="shopping-cart__products-col-title">Product Details</span>
            <span class="shopping-cart__products-col-title">unite Price</span>
            <span class="shopping-cart__products-col-title">Quantity</span>
            <span class="shopping-cart__products-col-title">shipping</span>
            <span class="shopping-cart__products-col-title">Subtotal</span>
            <span class="shopping-cart__products-col-title">Action</span>
        </div>
            <div class="shopping-cart__product-wrap" v-for="item of $root.cartGoods[1]" :key='item.id_product'>
                <figure class="shopping-cart__products-wrapper">
                    <img class="shopping-cart__products-img" :src="item.img" alt="Some img">
                    <figcaption class="shopping-cart__products-details">
                        <span class="shopping-cart__products-title">{{item.product_name}}</span>
                        <p class="shopping-cart__products-subtitle">Color: <span class="shopping-cart__products-subtitle">Red</span></p>
                        <p class="shopping-cart__products-subtitle">Size: <span class="shopping-cart__products-subtitle">Xl</span></p>
                    </figcaption>
                </figure>
                <span class="shopping-cart__products-cell-text">$ {{ item.price }}</span>
                <span class="shopping-cart__products-cell-text">{{item.quantity}}</span>
                <span class="shopping-cart__products-cell-text">Free</span>
                <span class="shopping-cart__products-cell-text">$ {{item.quantity * item.price}}</span>
                <button class="mini-cart__del-item" @click='deleteItem(item.id_product)'></button>
                <div class="shopping-cart__products-row-border"></div>
            </div>
        <div class="shopping-cart__btn-wrapper">
            <button class="shopping-cart-btn">Clear shopping cart</button>
            <button class="shopping-cart-btn">Continue shopping</button>
        </div>
        <div class="shopping-cart__checkout">
            <form class="shopping-cart__checkout-form shopping-cart__checkout-form-shipping">
                <span class="shopping-cart__checkout-form-title">Shipping Adress</span>
                <select class="shopping-cart__checkout-form-select">
                <option>Bangladesh</option>
                <option>India</option>
                </select>
                <input class="shopping-cart__checkout-form-select" type="text" value="State">
                <input class="shopping-cart__checkout-form-select" type="text" value="Postcode / Zip">
                <button class="shopping-cart__checkout-btn">get a quote</button>
            </form>
            <form class="shopping-cart__checkout-form shopping-cart__checkout-form-discount">
                <span class="shopping-cart__checkout-form-title">coupon discount</span>
                <span class="shopping-cart__checkout-form-subtitle">Enter your coupon code if you have one</span>
                <input class="shopping-cart__checkout-form-select" type="text" value="State">
                <button class="shopping-cart__checkout-btn">Apply coupon</button>
            </form>
        <div class="shopping-cart__checkout-form shopping-cart__checkout-form-total">
               <div class="shopping-cart__checkout-form-total-txt-wrapper">
                    <span class="shopping-cart__checkout-form-total-title">Sub total<span class="shopping-cart__checkout-form-total-subtitle_black" v-if='$root.cartGoods.length'>$ {{calculateCart()}}</span></span>
                    <span class="shopping-cart__checkout-form-total-subtitle">GRAND TOTAL <span class="shopping-cart__checkout-form-total-subtitle_red" v-if='$root.cartGoods.length'>$ {{calculateCart()}}</span></span>
               </div>
            <button class="shopping-cart__checkout-total-btn">proceed to checkout</button>
        </div>    
        </div>
    </section>
    `
})

