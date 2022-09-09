const MongoDB = require("../../mongoDB");
const {Product} = require("./productSchema")

class ProductsDaoMongo extends MongoDB{
    constructor(model) {
        super(model)

        this.connect().catch(err => {
            console.log("Error", err)
        })
    }
}

module.exports = new ProductsDaoMongo(Product)