let cartsDao;
let productsDao;

if (process.env.DB = "mongo") {
    cartsDao = await import('./carts/cartsDaoMongoDB');
    productsDao = await import("./products/productsDaoMongoDB");
} else {
    cartsDao = await import('./carts/cartsDaoMongoDB');
    productsDao = await import("./products/productsDaoMongoDB");
}

module.exports = {cartsDao, productsDao}