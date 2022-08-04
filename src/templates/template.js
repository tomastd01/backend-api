const productSvcs = require("../services/productServices");

const renderForm = (req, res) => {
    res.render("index")
}

const getAllProducts = (req, res) => {
    const products = productSvcs.getAll();
    res.render("products", {products});
}

const addProduct = (req, res) => {
    const {body} = req;
    productSvcs.saveNewProduct(body);
    res.redirect("/products");
}

module.exports = {
    renderForm,
    getAllProducts,
    addProduct,
}