const carts = require("./carts.json");

const getAllCarts = () => {
    return carts;
};

module.exports = {getAllCarts}