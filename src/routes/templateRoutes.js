const express = require("express");
const templateRouter = express.Router();
const productSvcs = require("../services/productServices");
const template = require("../templates/template");

templateRouter
    .route("/")
    .get(template.renderForm)

templateRouter
    .route("/products")
    .get(template.getAllProducts)
    .post(template.addProduct)

module.exports = templateRouter;