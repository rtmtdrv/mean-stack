const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Author's name is required!"], minlength: [3, "Name must be a minimum of 3 characters"]},
}, {timestamps: true});

mongoose.model("Author", AuthorSchema);