const env = require("dotenv");

env.config({
    path: "../db.env"
})

const URI = process.env.URI || "mongodb+srv://tomytorres:019283@cluster0.lgmy4it.mongodb.net/ecommerce?retryWrites=true&w=majority";

module.exports = {
    URI
}