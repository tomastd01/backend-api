const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    timestamp: {type: Date, required: true},
    products: {type: Array, default: []},
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = {Cart}