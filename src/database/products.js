const db = require("./products.json");

const getAllProducts = () => {
    return db;
};

module.exports = {getAllProducts}