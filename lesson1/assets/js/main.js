const products = [
    {id: 1, title: 'Майка', price: 700, description: "Какое-то описание товара", img: "assets/img/product1.jpg"},
    {id: 2, title: 'Блузка', price: 1500, description: "Какое-то описание товара", img: "assets/img/product2.jpg"},
    {id: 3, title: 'Куртка', price: 5000, description: "Какое-то описание товара", img: "assets/img/product3.jpg"},
    {id: 4, title: 'Блузка', price: 2000, description: "Какое-то описание товара", img: "assets/img/product4.jpg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<a class="product-item" href="#">
                <h3>${item.title}</h3>
                <img src="${item.img}">
                <p>${item.description} </p>
                <p>${item.price} руб.</p>
                <button class="buy-btn">Купить</button>
            </a>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    //console.log(productsList);
    //document.querySelector('.products').innerHTML = productsList;
    let products = productsList.join("");
    document.querySelector('.products').innerHTML = products;
};

renderPage(products);