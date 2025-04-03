const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    status: { type: String, enum: ["PENDING", "COMPLETED"] },
});

module.exports = mongoose.model("Order", OrderSchema);
