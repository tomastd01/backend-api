const express = require("express");
const productRouter = express.Router();
const productCtrl = require("../controllers/productControllers");

productRouter 
    .route("/")
    .get(productCtrl.getAll)
    .post(productCtrl.saveNewProduct)

productRouter 
    .route("/:id")
    .get(productCtrl.getById)
    .put(productCtrl.replaceById)
    .delete(productCtrl.deleteById)

module.exports = productRouter;