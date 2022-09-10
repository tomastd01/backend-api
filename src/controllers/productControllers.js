const productsDao = require("../database/daos/products/productsDaoFirebase")
/* const productsDao = require("../database/daos/products/productsDaoMongoDB") */

class productControllers {
    
    getAll = async (req, res) => {
        res.status(200).json(await productsDao.getAll());
    }

    saveNewProduct = async (req, res) => {
        const {body} = req;
        const newProduct = await productsDao.save(body)

        res.status(201).json(newProduct)
    }

    getById = async (req, res) => { 
        const {id} = req.params;
        
        const product = await productsDao.getById(id);
        
        if(!product) {
            res.status(404).json({messagge: "Product not found"})
        }
        res.status(200).json(product)
    }

    replaceById = async (req, res) => {
        const id = req.params.id;
        const {body} = req;

        const replacedProduct = await productsDao.update(id, body);

        if(!replacedProduct) {
            res.status(404).json({messagge: "Product not found"})
        }
        res.status(200).json(replacedProduct)

    }
    

    deleteById = async (req, res) => {
        const id = req.params.id;

        const ItemIsDeleted = await productsDao.delete(id);

        if (ItemIsDeleted) {
            res.status(200).json({message:"Product has been removed"})
        } else {
            return res.status(404).json({messagge: "Product not found"})
        }
    }

}

module.exports = new productControllers;