const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Product title is required!"], minlength: [4, "Title must be a minimum of 4 characters!"]},
    price: {type: Number, required: [true, "Product price is required!"]},
    img: {type: String, required: [true, "Image URL must be provided!"]}
}, {timestamps: true});

mongoose.model("Product", ProductSchema);