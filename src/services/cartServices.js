const productsDao = require("../database/daos/products/productsDaoFirebase");
const cartsDao = require("../database/daos/carts/cartsDaoFirebase");
/* const productsDao = require("../database/daos/products/productsDaoMongoDB");
const cartsDao = require("../database/daos/carts/cartsDaoMongoDB"); */

class cartServices {

    newCart = async () => {
        const date = new Date()
        const newCart = {
            timestamp: date.toLocaleString(),
            products: []
        };

        const cart = await cartsDao.save(newCart)
        return {msg: "Nuevo carrito creado", cart};
    }

    deleteCart = async (id) => {
        return await cartsDao.delete(id)
    }

    getCart = async (id) => {
        return await cartsDao.getById(id)
    }

    addProductToCartById = async (id, id_prod) => {
        const cart = await cartsDao.getById(id);
        const product = await productsDao.getById(id_prod);
        cart.products.push(product);
        await cartsDao.updateCart(id,cart.products);
        return {message: `Producto ${product.name} agregado al carrito ${id}`};        
    }

    deleteProductByCartId = async (id, id_prod) => {
        const cart = await cartsDao.getById(id)
        const prodIndex = cart.products.findIndex(prod => prod._id == id_prod);
        if(prodIndex == -1) return {msg: "ID de producto inválido"};

        cart.products.splice(prodIndex,1);
        await cartsDao.updateCart(id, cart.products)
        return {msg: "Producto eliminado"};
    }

}

module.exports = new cartServices;