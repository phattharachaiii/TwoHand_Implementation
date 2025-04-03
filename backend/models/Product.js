const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    price: Number,
    detail: String,
    productType: String,
    status: { type: String, enum: ["VERIFYING", "UNQUALIFIED", "AVAILABLE", "SOLD OUT"] },
});

module.exports = mongoose.model("Product", ProductSchema);
