const Firebase = require("../../firebase");

class CartsDaoFirebase extends Firebase {
    constructor() {
        super("carts")
    }


}

module.exports = new CartsDaoFirebase;