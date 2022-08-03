const {v4: uuid} = require("uuid");
const fs = require("fs")

const saveProductsToDB = (array) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(array, null, 2), {encoding: "utf-8"})
}

const addIdToNewProduct = (newProduct) => {
    const productWithId = {
        ...newProduct,
        id: uuid(),
    }

    return productWithId
}

module.exports = {
    saveProductsToDB,
    addIdToNewProduct
}