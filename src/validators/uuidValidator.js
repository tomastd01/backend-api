const {param} = require("express-validator");
const {validateResult} = require("../utils/validateUtils");

const validateID = [
    param("id")
        .isUUID(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateIdAndProdId = [
    param("id")
        .isUUID(),
    param("id_prod")
        .isUUID(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {validateID, validateIdAndProdId}