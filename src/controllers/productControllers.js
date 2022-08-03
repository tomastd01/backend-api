const productSvcs = require("../services/productServices");

class productControllers {
    
    getAll = (req, res) => {
        res.status(200).json(productSvcs.getAll());
    }

    saveNewProduct = (req, res) => {
        const {body} = req;
        const newProduct = productSvcs.saveNewProduct(body)
        console.log(newProduct)
        res.status(200).json(newProduct)
    }

    getById = (req, res) => { 
        const id = req.params.id;
        const products = this.products;
        const product = products.find(product => product.id == Number(id));

        product ? 
            res.status(200).json(product) 
            : res.json({error: "Product not found"}) 
    }

    replaceById = (req, res) => {
        const id = req.params.id;
        const product = req.body;
        product.id = Number(id);
        const index = this.products.findIndex(product => product.id == id);

        if (index) {
            this.products.splice(index, 1, product);
            res.status(200).json(product);
        } else res.json({error: "Product not found"});

    }
    

    deleteById = (req, res) => {
        const id = req.params.id;
        const index = this.products.findIndex(product => product.id == Number(id));

        if (index > -1) {
            this.products.splice(index, 1);
            return res.status(200).json({message:"Product has been removed"})
        }

        return res.status(404).json({error: "Product not found"})
    }

}

module.exports = new productControllers;