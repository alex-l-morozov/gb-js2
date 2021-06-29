/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/js/cart.js":
/*!**********************************!*\
  !*** ./public/assets/js/cart.js ***!
  \**********************************/
/***/ (() => {

eval("Vue.component('cart', {\n  props: ['cartitems', 'addproduct'],\n\n  data() {\n    return {\n      isVisibleCart: false\n    };\n  },\n\n  methods: {\n    calculateCart() {\n      let cartPrice = 0;\n      let cart = this.$parent.$parent.cartGoods[1];\n      cart.forEach(el => cartPrice += el.quantity * el.price);\n      return cartPrice;\n    },\n\n    deleteItem(id) {\n      let remove = this.$parent.$parent.remove;\n      let cart = this.$parent.$parent.cartGoods[1];\n      let find = cart.find(el => el.id_product === id);\n      remove(`/api/cart/${id}`, find); //    const curElement = this.cartitems.find(el => el.id_product == id);\n      //    if (curElement.count == 1) {\n      //        this.cartitems.splice(this.cartitems.indexOf(curElement), 1);\n      //    } else {\n      //         --curElement.count;\n      //    }\n    }\n\n  },\n  template: `\n    <div class=\"cart_content\">\n        <button class=\"top-cart\" type=\"button\" @click='isVisibleCart = !isVisibleCart'><img src=\"./assets/images/cart-shop.svg\"></button>\n        <div class=\"cart\" v-if='isVisibleCart'>\n            <p v-if='!cartitems[1].length'>Пусто</p>\n            <div class='cart_item' v-for=\"item of cartitems[1]\" :key='item.id_product'>\n                <img :src=\"item.img\" alt=\"Some img\" class='cart_img'>\n                <div class='cart_item_info'>\n                    <p class='cart_item_name'>{{item.product_name}}</p>\n                    <p type='number' class='cart_item_count' @input='$parent.$emit(\"addproduct\",item)'>Количество: {{ item.quantity }}</p>\n                    <p class='cart_item_price'>Стоимость: {{item.quantity * item.price}}</p>\n                </div>\n                <button @click='deleteItem(item.id_product)'>Удалить</button>\n            </div>\n            <p v-if='cartitems[1].length'>Итого: {{calculateCart()}}</p>\n        </div>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project/./public/assets/js/cart.js?");

/***/ }),

/***/ "./public/assets/js/header.js":
/*!************************************!*\
  !*** ./public/assets/js/header.js ***!
  \************************************/
/***/ (() => {

eval("Vue.component('header-comp', {\n  props: ['cartitems', 'addproduct'],\n  template: `<div class=\"container top-box\">\n                <search></search>\n                <cart :cartitems='cartitems' :addproduct='addproduct'></cart>\n            </div>\n`\n});\nVue.component('search', {\n  data() {\n    return {\n      searchLine: ''\n    };\n  },\n\n  template: `<div class=\"top-left\">\n            <a class=\"top-logo\" href=\"/\"><img src=\"./assets/images/logo-shop.png\"></a>\n             <input class=\"search-field\" type=\"text\" v-model='searchLine'  @input='$parent.$emit(\"filtergoods\", searchLine)' placeholder='Найти товар...'>\n            <a class=\"top-search\" href=\"#\"><img src=\"./assets/images/search.svg\"></a>\n    </div>\n    `\n});\nVue.component('cart', {\n  props: ['cartitems', 'addproduct'],\n\n  data() {\n    return {\n      isVisibleCart: false\n    };\n  },\n\n  methods: {\n    calculateCart() {\n      let cartPrice = 0;\n      let cart = this.$parent.$parent.cartGoods[1];\n      cart.forEach(el => cartPrice += el.quantity * el.price);\n      return cartPrice;\n    },\n\n    deleteItem(id) {\n      let remove = this.$parent.$parent.remove;\n      let cart = this.$parent.$parent.cartGoods[1];\n      let find = cart.find(el => el.id_product === id);\n      remove(`/api/cart/${id}`, find); //    const curElement = this.cartitems.find(el => el.id_product == id);\n      //    if (curElement.count == 1) {\n      //        this.cartitems.splice(this.cartitems.indexOf(curElement), 1);\n      //    } else {\n      //         --curElement.count;\n      //    }\n    }\n\n  },\n  template: `\n<div class=\"top-right\">\n            <a class=\"top-menu\" href=\"#\"><img src=\"./assets/images/menu.svg\"></a>\n            <a class=\"top-user\" href=\"#\"><img src=\"./assets/images/user.svg\"></a>\n        <button class=\"top-cart\" type=\"button\" @click='isVisibleCart = !isVisibleCart'><img src=\"./assets/images/cart-shop.svg\"></button>\n        <div class=\"cart\" v-if='isVisibleCart'>\n            <p v-if='!cartitems[1].length'>Пусто</p>\n            <div class='cart_item' v-for=\"item of cartitems[1]\" :key='item.id_product'>\n                <img :src=\"item.img\" alt=\"Some img\" class='cart_img'>\n                <div class='cart_item_info'>\n                    <p class='cart_item_name'>{{item.product_name}}</p>\n                    <p type='number' class='cart_item_count' @input='$parent.$emit(\"addproduct\",item)'>Количество: {{ item.quantity }}</p>\n                    <p class='cart_item_price'>Стоимость: {{item.quantity * item.price}}</p>\n                </div>\n                <button @click='deleteItem(item.id_product)'>Удалить</button>\n            </div>\n            <p v-if='cartitems[1].length'>Итого: {{calculateCart()}}</p>\n        </div>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project/./public/assets/js/header.js?");

/***/ }),

/***/ "./public/assets/js/main.js":
/*!**********************************!*\
  !*** ./public/assets/js/main.js ***!
  \**********************************/
/***/ (() => {

eval("const app = new Vue({\n  el: '#app',\n  data: {\n    products: [],\n    api: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/',\n    cartData: '',\n    showedProducts: [],\n    cartGoods: []\n  },\n  methods: {\n    fetchProducts(url) {\n      return fetch(url).then(answer => answer.json()).catch(error => console.log(error));\n    },\n\n    filterGoods(searchLine) {\n      if (searchLine) {\n        this.showedProducts = this.products.filter(value => value.product_name.toLowerCase().includes(searchLine.toLowerCase()));\n      } else {\n        this.showedProducts = this.products;\n      }\n    },\n\n    postJson(url, data) {\n      console.log(url);\n      return fetch(url, {\n        method: 'POST',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        console.log(error);\n      });\n    },\n\n    putJson(url, data) {\n      console.log(url);\n      return fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        console.log(error);\n      });\n    },\n\n    remove(url, data) {\n      return fetch(url, {\n        method: 'DELETE',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => {\n        result.json();\n        this.fetchProducts('/api/cart').then(data => {\n          console.log(data);\n          this.cartGoods.push({\n            amount: data.amount,\n            countGoods: data.countGoods\n          });\n          this.cartGoods[1] = data.contents;\n        });\n      }).catch(error => {\n        console.log(error);\n      });\n    },\n\n    addProduct(item) {\n      console.log(this.cartGoods[1]);\n      let find = this.cartGoods[1].find(el => el.id_product === item.id_product);\n\n      if (find) {\n        this.putJson(`/api/cart/${find.id_product}`, {\n          quantity: 1\n        }).then(data => {\n          if (data.result === 1) {\n            find.quantity++;\n          }\n        });\n      } else {\n        const prod = Object.assign({\n          quantity: 1\n        }, item);\n        this.postJson(`/api/cart`, prod).then(data => {\n          if (data.result === 1) {\n            this.cartGoods[1].push(prod);\n          }\n        });\n      }\n    }\n\n  },\n\n  mounted() {\n    this.fetchProducts('/api/products').then(data => {\n      for (let item of data) {\n        item.img = \"/assets/images/product\" + item.id_product + \".jpg\";\n        this.products.push(item);\n        this.showedProducts.push(item);\n      }\n    });\n    this.fetchProducts('/api/cart').then(data => {\n      this.cartGoods.push({\n        amount: data.amount,\n        countGoods: data.countGoods\n      });\n      this.cartGoods.push(data.contents);\n    });\n  }\n\n});\n\n//# sourceURL=webpack://project/./public/assets/js/main.js?");

/***/ }),

/***/ "./public/assets/js/products.js":
/*!**************************************!*\
  !*** ./public/assets/js/products.js ***!
  \**************************************/
/***/ (() => {

eval("Vue.component('products-comp', {\n  props: ['showed', 'addproduct'],\n  template: `<div class=\"products-list-block\">\n                <div class=\"products-item-block\" v-for=\"product of showed\" :key='product.id_product'>\n                    <a href=\"#\" class=\"product-link\">\n                        <img :src=\"product.img\" class=\"product-item-img\" :alt=\"product.product_name\">\n                        <h4 class=\"products-item-heading\">{{product.product_name}}</h4>\n                        <p class=\"products-item-text\">{{product.product_description}}</p>\n                        <p class=\"products-item-price\">{{product.price}} рублей</p>\n                    </a>\n                    <div class=\"product-item-card\">\n                        <button :id=\"product.id_product\" type=\"button\" @click='$emit(\"addproduct\",product)' class=\"product-item-card-link\"><img class=\"product-item-card-img\" src=\"./assets/images/cart-add.svg\" alt=\"cart-img\">Add to cart</button>\n                    </div>\n                </div>\n                </div>\n`\n});\n\n//# sourceURL=webpack://project/./public/assets/js/products.js?");

/***/ }),

/***/ "./public/assets/js/search.js":
/*!************************************!*\
  !*** ./public/assets/js/search.js ***!
  \************************************/
/***/ (() => {

eval("Vue.component('search', {\n  data() {\n    return {\n      searchLine: ''\n    };\n  },\n\n  template: `\n    <div class=\"find_content\">\n        <input type=\"text\" v-model='searchLine'  @input='$parent.$emit(\"filtergoods\", searchLine)' placeholder='Найти товар...'>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project/./public/assets/js/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./public/assets/js/main.js"]();
/******/ 	__webpack_modules__["./public/assets/js/cart.js"]();
/******/ 	__webpack_modules__["./public/assets/js/header.js"]();
/******/ 	__webpack_modules__["./public/assets/js/search.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/products.js"]();
/******/ 	
/******/ })()
;