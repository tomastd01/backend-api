const express = require("express");
const productRouter = express.Router();
const productCtrl = require("../controllers/productControllers");
const {validateProduct} = require("../validators/productValidator")

productRouter 
    .route("/")
    .get(productCtrl.getAll)
    .post(validateProduct, productCtrl.saveNewProduct)

productRouter 
    .route("/:id")
    .get(productCtrl.getById)
    .put(productCtrl.replaceById)
    .delete(productCtrl.deleteById)

module.exports = productRouter;