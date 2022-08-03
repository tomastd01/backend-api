const { getAllProducts } = require("../database/products");
const { saveProductsToDB, addIdToNewProduct } = require("../utils/utils")

class productServices {
    constructor() {
        this.products = getAllProducts();
    }

    getAll = () => {
        return this.products;
    }

    saveNewProduct = (productToAdd) => {
        const products = this.products;

        const newProduct = addIdToNewProduct(productToAdd);

        products.push(newProduct);
        saveProductsToDB(products);

        return newProduct;
    }

    getById = () => {

    }

    replaceById = () => {
        
    }

    deleteById = () => {
        
    }
}

module.exports = new productServices;
