const env = require("dotenv");

env.config({
    path: "../db.env"
})

const DB = process.env.DB || "mongo";
const URI = process.env.URI || "mongodb://";

module.exports = {
    DB, URI
}