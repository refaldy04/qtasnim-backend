const products = require('express').Router();
const productsController = require('../controllers/products');

products.get('/getProducts', productsController.getProducts);
products.get('/getProduct/:id', productsController.getProductByID);
products.post('/createProduct', productsController.createProduct);
products.patch('/editProduct/:id', productsController.editProduct);
products.delete('/deleteProduct/:id', productsController.deleteProduct);

module.exports = products;
