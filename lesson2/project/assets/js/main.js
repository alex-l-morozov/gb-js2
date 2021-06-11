class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.products = [];
        this.allProducts = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.products = [
            {id: 1, title: 'Майка', price: 700, description: "Какое-то описание товара", img: "assets/img/product1.jpg"},
            {id: 2, title: 'Блузка', price: 1500, description: "Какое-то описание товара", img: "assets/img/product2.jpg"},
            {id: 3, title: 'Куртка', price: 5000, description: "Какое-то описание товара", img: "assets/img/product3.jpg"},
            {id: 4, title: 'Блузка', price: 2000, description: "Какое-то описание товара", img: "assets/img/product4.jpg"},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.products){
            const obProducts = new ProductItem(product, product.img);
            this.allProducts.push(obProducts);
            block.insertAdjacentHTML('beforeend',obProducts.render())
        }
    }
    getSum() {
        let sum = 0;
        this.products.forEach(item=>{
            sum += item.price;
        })
        console.log(sum);

        // Для себя сохранил варианты из урока
        // let sum = 0;
        // for(let product of this.products){
        //     sum += product.price;
        // }
        //
        // let res = this.allProducts.reduce((sum, item) => sum + item.price,0);
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.description = product.description;
        this.price = product.price;
        this.id = product.id;
        this.img = img;

    }

    render() {
        return `<a class="product-item" href="#">
                <h3>${this.title}</h3>
                <img src="${this.img}">
                <p>${this.description} </p>
                <p>${this.price} руб.</p>
                <button class="buy-btn">Купить</button>
            </a>`
    }
}

let products = new ProductsList();
products.render();
products.getSum();

class Cart {
    addProduct() {

    }

    removeProduct() {

    }

    changeProduct() {

    }

    render() {

    }
}

class CartItem {
    render() {

    }
}