const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
    const { sellerId, name, price, detail, productType } = req.body;
    const newProduct = new Product({ sellerId, name, price, detail, productType, status: "VERIFYING" });
    await newProduct.save();
    res.json(newProduct);
};
