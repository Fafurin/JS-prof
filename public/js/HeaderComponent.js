Vue.component('header-comp',{
    props:['cartitems','addproduct'],
    template: ` <header class="head">
                    <div class="header-wrapper container">
                        <a class="logo" href="index.html"><img src="img/logo.png" alt="logo" class="logo__img"><span class="logo__text">BRAN<span class="logo__text-special-case">D</span></span></a>
                        <div class="search-box">
                            <div class="search-box__browse-btn">Browse</div>
                            <search></search>
                        </div>
                            <cart :cartitems = 'cartitems' :addproduct='addproduct'></cart>
                    </div>
                    <div class="header--border"></div>
                </header>
`
})

Vue.component('search',{
    data(){
        return {
            searchLine:'',
        }
    },
    template: `
        <form class="search-box__field" action="#" @submit.prevent='$parent.$emit("filtergoods", searchLine)'>
          <input v-model='searchLine' class="search-box__input" type="text" placeholder="Search for item...">
          <button type="submit" class="search-box__submit"></button>
        </form>
    `
})

Vue.component('cart',{
    props:['cartitems','addproduct'],
    data(){
        return {
            isVisibleCart: false,
        }
    },
    methods: {
        calculateCart() {
            console.log(this.$parent.$parent.cartGoods[0].countGoods);
            let cartPrice = 0;
            let cart = this.$parent.$parent.cartGoods[1];
            cart.forEach(el => cartPrice += el.quantity * el.price)
            return cartPrice.toFixed(2);
        },
        deleteItem(id) {
            let remove = this.$parent.$parent.remove;
            let cart = this.$parent.$parent.cartGoods[1];
            let find = cart.find(el => el.id_product === id);

            remove(`/api/cart/${id}`,find);
        }
    },
    template: `
    <div class="account">
        <button @click='isVisibleCart = !isVisibleCart' class="account__cart"><svg x="0px" y="0px" viewBox="0 0 459.529 459.529" width="35" height="32">
            <path d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
            l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
            s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
            S7.65,55.231,17,55.231z"/>
            <path d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
            S114.183,438.298,135.433,438.298z"/>
            <path d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
            c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
            C339.433,422.431,356.15,438.298,376.267,438.298z"/>
            </svg>
        
        </button>
        <div class="mini-cart" v-if='isVisibleCart'>
                <div class="mini-cart__items-wrapper">
                    <div class="mini-cart__item" v-for="item of cartitems[1]" :key='item.id_product'>
                        <div class="mini-cart__item-img-wrap">
                          <img class="mini-cart__item-img" :src="item.img" alt="Some img">
                        </div>
                        <div class="mini-cart__item-text"> 
                            <span class="mini-cart__item-title">{{item.product_name}}</span> 
                            <span class="mini-cart__item-price">{{ item.quantity }} x $ {{ item.price }}</span> 
                        </div>
                        <button class="mini-cart__del-item" @click='deleteItem(item.id_product)'></button>
                    </div>
                </div>
                <div class="mini-cart-total-wrap">
                    <span class="mini-cart__total">Total</span>
                    <span class="mini-cart__total mini-cart__total-value" v-if='cartitems[1].length'>$ {{calculateCart()}}</span>
                </div>
                <a href="checkout.html" class="mini-cart__btn">Checkout</a>
                <a href="shopping_cart.html" class="mini-cart__btn">Go to cart</a>
        </div>
        <button class="account__btn">My&nbsp;Account</button>
    </div>
    `
})