const express = require("express");
const productRouter = express.Router();
const productCtrl = require("../controllers/productControllers");
const {validateProduct} = require("../validators/productValidator");
const { validateID } = require("../validators/uuidValidator");


productRouter 
    .route("/")
    .get(productCtrl.getAll)
    .post(validateProduct, productCtrl.saveNewProduct)

productRouter 
    .route("/:id")
    .get(validateID, productCtrl.getById)
    .put(validateID, validateProduct, productCtrl.replaceById)
    .delete(validateID, productCtrl.deleteById)

module.exports = productRouter;