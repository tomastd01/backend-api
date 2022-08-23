const {v4: uuid} = require("uuid");
const fs = require("fs")

const saveToDB = (array, file) => {
    fs.writeFileSync("./src/database/" + file, JSON.stringify(array, null, 2), {encoding: "utf-8"})
}

const addIdToNewProduct = (newProduct) => {
    const date = new Date();
    const productWithId = {
        id: uuid(),
        timestamp: date.toLocaleString(),
        ...newProduct,
    }

    return productWithId
}

module.exports = {
    saveToDB,
    addIdToNewProduct
}