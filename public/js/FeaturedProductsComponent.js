Vue.component('featured-products-comp', {
    props:['showed','addproduct'],
    template: ` <div class="items-wrapper">
                    <div v-for="product of showed.slice(0, 8)" :key='product.id_product' class="fetured-item">
                        <div class="cart-btn-wrapper">
                            <button class="fetured-item__cart-btn" :id="product.id_product" @click='$emit("addproduct",product)'>Add to Cart</button>
                        </div> 
                        <img class="fetured-item__img" :src="product.img" alt="">
                        <div class="fetured-item__text-wrapper"> 
                            <span class="fetured-item__title">{{ product.product_name }}</span> 
                            <span class="fetured-item__price">$ {{ product.price }}</span> 
                        </div>
                    </div>
                </div>
            `
})
