const express = require("express");
const cartRouter = express.Router();
const cartCtrl = require("../controllers/cartControllers");

cartRouter
    .route("/")
    .post(cartCtrl.newCart)

cartRouter
    .route("/:id")
    .delete(cartCtrl.deleteCart)

cartRouter
    .route("/:id/products")
    .get(cartCtrl.getCart)

cartRouter
    .route("/:id/products/:id_prod")
    .post(cartCtrl.addProductToCart)
    .delete(cartCtrl.deleteProductByCartId)

module.exports = cartRouter;