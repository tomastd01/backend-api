const admin = require("firebase-admin");
const serviceAccount = require("../config/backend-e1219-firebase-adminsdk-pn0ms-b29b2671a0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

class Firebase {
    constructor(collectionName) {
        this.collection = db.collection(collectionName)
    }

    async getAll() {
        try {
            const data = [];
            const snapshot = await this.collection.get();
            snapshot.forEach(doc => {
                data.push({id: doc.id, ...doc.data()});
            });
            return data
        } catch(err) {
            console.log("Error",err)
        }
    }
    async getById(id) {
        try {
            const docRef = this.collection.doc(id)
            /* if(!docRef.exists) throw {msg: "No encontrado"} */
            const doc = await docRef.get();
            return {id: doc.id, ...doc.data()}
        } catch(err) {
            console.log("Error",err)
        }
    }
    async save(obj) {
        try {
            return await this.collection.add(obj);
        } catch(err) {
            console.log("Error",err)
        }
    }
    async update(id, obj) {
        try {
            return await this.collection.doc(id).set(obj)
        } catch(err) {
            console.log("Error",err)
        }
    }
    async updateCart(id,cart) {
        try {
            const doc = await this.getById(id);
            doc.products = cart
            return await this.update(id, doc)
        } catch(err) {
            console.log("Error", err)
        }
    }
    async delete(id) {
        try {
            return await this.collection.doc(id).delete()
        } catch(err) {
            console.log("Error",err)
        }
    }

}

module.exports = Firebase;