Vue.component('cart',{
    props:['cartitems','addproduct'],
    data(){
        return {
            isVisibleCart: false,
        }
    },
    methods: {
        calculateCart() {
            let cartPrice = 0;
            let cart = this.$parent.$parent.cartGoods[1];
            cart.forEach(el => cartPrice += el.quantity * el.price)
            return cartPrice;
        },
        deleteItem(id) {
            let remove = this.$parent.$parent.remove;
            let cart = this.$parent.$parent.cartGoods[1];
            let find = cart.find(el => el.id_product === id);

            remove(`/api/cart/${id}`,find);
            //    const curElement = this.cartitems.find(el => el.id_product == id);
            //    if (curElement.count == 1) {
            //        this.cartitems.splice(this.cartitems.indexOf(curElement), 1);
            //    } else {
            //         --curElement.count;
            //    }
        }
    },
    template: `
    <div class="cart_content">
        <button class="top-cart" type="button" @click='isVisibleCart = !isVisibleCart'><img src="./assets/images/cart-shop.svg"></button>
        <div class="cart" v-if='isVisibleCart'>
            <p v-if='!cartitems[1].length'>Пусто</p>
            <div class='cart_item' v-for="item of cartitems[1]" :key='item.id_product'>
                <img :src="item.img" alt="Some img" class='cart_img'>
                <div class='cart_item_info'>
                    <p class='cart_item_name'>{{item.product_name}}</p>
                    <p type='number' class='cart_item_count' @input='$parent.$emit("addproduct",item)'>Количество: {{ item.quantity }}</p>
                    <p class='cart_item_price'>Стоимость: {{item.quantity * item.price}}</p>
                </div>
                <button @click='deleteItem(item.id_product)'>Удалить</button>
            </div>
            <p v-if='cartitems[1].length'>Итого: {{calculateCart()}}</p>
        </div>
    </div>
    `
})
