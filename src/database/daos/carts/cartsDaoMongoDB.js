const MongoDB = require("../../mongoDB");
const {Cart} = require("./cartSchema");

class CartsDaoMongo extends MongoDB{
    constructor(model) {
        super(model)

        this.connect().catch(err => {
            console.log("Error", err)
        })
    }
}

module.exports = new CartsDaoMongo(Cart)