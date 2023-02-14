const Product = require('../models/ProductModel.js');
const ErrorHandler = require('../utils/ErrorHandler.js');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const Features = require('../utils/Features');
//  create product

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
    });
});

// get all products

exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 10;
    const productCount = await Product.countDocuments();

    const features = new Features(Product.find(), req.query).search().filter().pagination(resultPerPage);

    const products = await features.query;

    res.status(200).json({
        success: true,
        products,
        productCount
    });
});

//Update product --- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product is not found with this id', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });

    res.status(200).json({
        success: true,
        product,
    });
});

//  delete product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product is not found with this id', 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
    });
});

// single product details

exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product is not found with this id', 404));
    }

    res.status(200).json({
        success: true,
        product,
    });
});
