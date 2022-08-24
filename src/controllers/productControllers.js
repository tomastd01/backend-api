const productSvcs = require("../services/productServices");

class productControllers {
    
    getAll = (req, res) => {
        res.status(200).json(productSvcs.getAll());
    }

    saveNewProduct = (req, res) => {
        const {body} = req;
        const newProduct = productSvcs.saveNewProduct(body)

        res.status(201).json(newProduct)
    }

    getById = (req, res) => { 
        const {id} = req.params;
        
        const product = productSvcs.getById(id);
        
        if(!product) {
            res.status(404).json({messagge: "Product not found"})
        }
        res.status(200).json(product)
    }

    replaceById = (req, res) => {
        const id = req.params.id;
        const {body} = req;

        const replacedProduct = productSvcs.replaceById(id, body);

        if(!replacedProduct) {
            res.status(404).json({messagge: "Product not found"})
        }
        res.status(200).json(replacedProduct)

    }
    

    deleteById = (req, res) => {
        const id = req.params.id;

        const ItemIsDeleted = productSvcs.deleteById(id);

        if (ItemIsDeleted) {
            res.status(200).json({message:"Product has been removed"})
        } else {
            return res.status(404).json({messagge: "Product not found"})
        }
    }

}

module.exports = new productControllers;