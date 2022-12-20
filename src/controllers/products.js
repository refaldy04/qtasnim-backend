const response = require('../helpers/standardResponse');
const productsModel = require('../models/products');

exports.getProducts = (req, res) => {
  productsModel.getProducts((result) => {
    return response(res, 'List All Products', result);
  });
};

exports.getProductByID = (req, res) => {
  productsModel.getProductByID(req.params, (result) => {
    return response(res, 'Detail Products', result);
  });
};

exports.createProduct = (req, res) => {
  productsModel.createProduct(req.body, (result) => {
    return response(res, 'Create Product Success', result);
  });
};

exports.editProduct = (req, res) => {
  productsModel.editProduct(req.body, req.params.id, (result) => {
    return response(res, 'Update Product Success', result);
  });
};

exports.deleteProduct = (req, res) => {
  productsModel.deleteProduct(req.params.id, (result) => {
    return response(res, 'Delete Product Success');
  });
};
