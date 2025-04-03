const Order = require("../models/Order");
const Product = require("../models/Product");

exports.placeOrder = async (req, res) => {
    const { buyerId, productId } = req.body;
    const product = await Product.findById(productId);
    
    if (!product || product.status !== "AVAILABLE") {
        return res.status(400).send("Product not available");
    }

    const newOrder = new Order({ buyerId, productId, status: "PENDING" });
    await newOrder.save();
    
    product.status = "SOLD OUT";
    await product.save();

    res.json(newOrder);
};
