const products = require("../database/products");

const getAll = () => {
    const allProducts = products.getAllProducts();
    return allProducts;
}

module.exports = {getAll}
