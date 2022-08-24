const express = require("express");
const cartRouter = express.Router();
const cartCtrl = require("../controllers/cartControllers");
const { validateID, validateIdAndProdId } = require("../validators/uuidValidator");

cartRouter
    .route("/")
    .post(cartCtrl.newCart)

cartRouter
    .route("/:id")
    .delete(validateID, cartCtrl.deleteCart)

cartRouter
    .route("/:id/products")
    .get(validateID, cartCtrl.getCart)

cartRouter
    .route("/:id/products/:id_prod")
    .post(validateIdAndProdId, cartCtrl.addProductToCart)
    .delete(validateIdAndProdId, cartCtrl.deleteProductByCartId)

module.exports = cartRouter;