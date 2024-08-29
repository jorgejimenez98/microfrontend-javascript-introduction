import { mount as mountProducts } from 'productsApp/ProductsIndex'
import { mount as mountCart } from  'cartsApp/CartIndex'

console.log('Container')

mountProducts(document.querySelector("#my-products"))
mountCart(document.querySelector("#my-cart"))