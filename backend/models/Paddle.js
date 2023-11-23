const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    bestPrice: { type: Number, default: false },
    brand: { type: String, required: true },
    color: { type: Array, required: true },
    surface: { type: String, required: true },
    playStyle: { type: String, required: true },
    coreThickness: { type: Array, required: true },
    handleLength: { type: Number, required: true },
    paddleWeight: { type: Array, required: true },
    paddleShape: { type: String, required: true },
    aff_links: { type: Array, required: true },
},{ timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);