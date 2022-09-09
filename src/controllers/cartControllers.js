const cartSvcs = require("../services/cartServices");

class cartControllers {
    newCart = async(req, res) => {
        res.json(await cartSvcs.newCart())
    }

    getCart = async(req, res) => {
        const {id} = req.params;
        res.json(await cartSvcs.getCart(id))
    }

    deleteCart = async(req, res) => {
        const {id} = req.params;
        res.json(await cartSvcs.deleteCart(id))
    }

    addProductToCart = async(req, res) => {
        const {id, id_prod} = req.params;
        res.json(await cartSvcs.addProductToCartById(id, id_prod))
    }

    deleteProductByCartId = async(req, res) => {
        const {id, id_prod} = req.params;
        res.json(await cartSvcs.deleteProductByCartId(id, id_prod))
    }
}

module.exports = new cartControllers;