const db = require("./db.json");

const getAllProducts = () => {
    return db;
};

module.exports = {getAllProducts}