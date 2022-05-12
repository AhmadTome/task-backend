const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const Author = require('../../Author/Schema/authorSchema');

const book = new mongoose.Schema({
    name: {
        type: String
    },
    isbn: {
        type: String
    },
    author_id: {
        type: Schema.ObjectId,
        ref: Author
    }
});

module.exports = Book = mongoose.model('book', book);