const {check} = require("express-validator");
const {validateResult} = require("../utils/validateUtils");

const validateProduct = [
    check("name")
        .exists()
        .not()
        .isEmpty(),
    check("description")
        .exists()
        .not()
        .isEmpty(),
    check("code")
        .exists()
        .not()
        .isEmpty(),
    check("imgUrl")
        .exists()
        .not()
        .isEmpty(),
    check("price")
        .exists()
        .isNumeric()
        .not()
        .isEmpty(),
    check("stock")
        .exists()
        .isNumeric()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {validateProduct};