const { getAllCarts } = require("../database/cart");
const { saveToDB } = require("./utils");
const { v4:uuid } = require("uuid")

class cartServices {
    constructor() {
        this.carts = getAllCarts();
    }

    newCart = () => {
        const date = new Date()
        const newCart = {
            id: uuid(),
            timestamp: date.toLocaleString(),
            products: []
        };

        this.carts.push(newCart);
        saveToDB(this.carts, "carts.json")
        return newCart.id;
    }

    deleteCart = (id) => {
        const cartIndex = this.carts.findIndex(cart => cart.id == id);
        if (cartIndex == -1) return;

        this.carts.splice(cartIndex,1)
        return this.carts[cartIndex];
    }

    getCart = (id) => {
        const cartIndex = this.carts.findIndex(cart => cart.id == id);
        if (cartIndex == -1) return;
        
        return this.carts[cartIndex].products;
    }

    addProductToCart = (id, product) => {
        const cartIndex = this.carts.findIndex(cart => cart.id == id);
        if (cartIndex == -1) return { msg:"cart no encontrado"};

        this.carts[cartIndex].products.push(product);
        saveToDB(this.carts, "carts.json");
        return {message: "Producto agregado al carrito"};        
    }

    deleteProductByCartId = (id, id_prod) => {
        const cartIndex = this.carts.findIndex(cart => cart.id == id);
        if (cartIndex == -1) return;
        const prodIndex = this.carts[cartIndex].products.findIndex(prod => prod.id == id_prod);
        if(prodIndex == -1) return;

        this.carts[cartIndex].products.splice(prodIndex,1);
        saveToDB(this.carts, "carts.json");
        return {msg: "producto eliminado"}
    }

}

module.exports = new cartServices;