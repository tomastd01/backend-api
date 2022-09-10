const Firebase = require("../../firebase");

class ProductsDaoFirebase extends Firebase {
    constructor() {
        super("products")
    }


}

module.exports = new ProductsDaoFirebase;