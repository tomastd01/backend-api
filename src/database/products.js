const db = require("./db.json");

const getAllProducts = () => {
    return db.products;
};

module.exports = {getAllProducts}