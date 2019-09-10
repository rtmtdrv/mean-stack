const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quotes2', { useNewUrlParser: true });

const QuoteSchema = new mongoose.Schema({
    quote: { type: String, required: [true, "Quote must not be blank."] },
    votes: {
        type: Number,
    },
}, { timestamps: true });


var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: [true, "Name must not be blank and greater than 3 characters."]

    },
    quotes: [QuoteSchema]
}
    , { timestamps: true });


module.exports = mongoose.model('Object', AuthorSchema);