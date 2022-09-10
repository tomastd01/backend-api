const mongoose = require("mongoose");
const {config} = require("../config/config");

class MongoDB {
    constructor(model) {
        this.URI = config.mongo.URI;
        this.model = model
    }

    async connect() {
        try {
            return await mongoose.connect(this.URI)
        } catch(err) {
            console.log("No se pudo conectar", err)
        }
    }

    async save(obj) {
        try {
            return await this.model.create(obj)
        } catch(err) {
            console.log("Error", err)
        }
    }

    async getAll() {
        try {
            return await this.model.find()
        } catch(err) {
            console.log("Error", err)
        }
    }

    async getById(id) {
        try {
            const _id = mongoose.Types.ObjectId(id);
            return await this.model.findById(_id)
        } catch(err) {
            console.log("Error", err)
        }
    }

    async update(id, product) {
        try {
            const doc = await this.getById(id);

            doc.name = product.name;
            doc.description = product.description;
            doc.price = Number(product.price);
            doc.stock = Number(product.stock);
            doc.imgUrl = product.imgUrl;
            doc.code = Number(product.code);

            return await doc.save()
        } catch(err) {
            console.log("Error", err)
        }
    }

    async updateCart(id,cart) {
        try {
            const doc = await this.getById(id);
            doc.products = cart
            return await doc.save()
        } catch(err) {
            console.log("Error", err)
        }
    }

    async delete(id) {
        try {
            const _id = mongoose.Types.ObjectId(id);
            return await this.model.deleteOne({_id: _id});
        } catch(err) {
            console.log("Error", err)
        }
    }
}

module.exports = MongoDB