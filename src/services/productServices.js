const { getAllProducts } = require("../database/products");
const { saveToDB, addIdToNewProduct } = require("../utils/utils")

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
        saveToDB(products, "products.json");

        return newProduct;
    }

    getById = (id) => {
        const product = this.products.find(product => product.id === id)
        if (!product) {return};

        return product;
    }

    replaceById = (id, product) => {
        const index = this.products.findIndex(product => product.id == id);
        if (index == -1) return;

        const newProduct = {
            ...product,
            id: id
        }

        this.products.splice(index, 1, newProduct);
        saveToDB(this.products, "products.json");

        return this.products[index]
    }

    deleteById = (id) => {
        const index = this.products.findIndex(product => product.id == id);
        if (index == -1) return;

        this.products.splice(index, 1);
        saveToDB(this.products, "products.json");
        return true
    }
}

module.exports = new productServices;
