Vue.component('products-comp',{
    props:['showed','addproduct'],
    template: `<div class="products-list-block">
                <div class="products-item-block" v-for="product of showed" :key='product.id_product'>
                    <a href="#" class="product-link">
                        <img :src="product.img" class="product-item-img" :alt="product.product_name">
                        <h4 class="products-item-heading">{{product.product_name}}</h4>
                        <p class="products-item-text">{{product.product_description}}</p>
                        <p class="products-item-price">{{product.price}} рублей</p>
                    </a>
                    <div class="product-item-card">
                        <button :id="product.id_product" type="button" @click='$emit("addproduct",product)' class="product-item-card-link"><img class="product-item-card-img" src="./assets/images/cart-add.svg" alt="cart-img">Add to cart</button>
                    </div>
                </div>
                </div>
`
})