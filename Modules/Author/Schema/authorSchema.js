const mongoose = require('mongoose');

const author = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

module.exports = Author = mongoose.model('author', author);