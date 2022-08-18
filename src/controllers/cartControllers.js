const cartSvcs = require("../services/cartServices");

class cartControllers {
    newCart = (req, res) => {
        res.json(cartSvcs.newCart())
    }

    getCart = (req, res) => {
        const {id} = req.params;
        res.json(cartSvcs.getCart(id))
    }

    deleteCart = (req, res) => {
        const {id} = req.params;
        res.json(cartSvcs.deleteCart(id))
    }

    addProductToCart = (req, res) => {
        const {id} = req.params;
        const {body} = req;
        res.json(cartSvcs.addProductToCart(id, body))
    }

    deleteProductByCartId = (req, res) => {
        const {id, id_prod} = req.params;
        res.json(cartSvcs.deleteProductByCartId(id, id_prod))
    }
}

module.exports = new cartControllers;