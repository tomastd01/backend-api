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
        saveProductsToDB(this.products)

        return this.products[index]
    }

    deleteById = () => {
        
    }
}

module.exports = new productServices;
