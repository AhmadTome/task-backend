const Book = require('../Schema/bookSchema');
const mongoose = require("mongoose");


const bookCreate = async (inputs) => {
    const book = new Book(inputs);
    try {
        const result = await book.save();

        return bookGet(result._id);
    } catch (err) {
        console.log(err)
    }
};

const bookList = async (page, page_size) => {
    try {
        const books = await Book.aggregate([
            {
                $lookup: {
                    from: "authors", // collection name in db
                    localField: "author_id",
                    foreignField: "_id",
                    as: "author"
                }
            },
            {$skip: parseInt(page_size) * (page-1) },
            {$limit: parseInt(page_size)},
        ]).exec();

        return books;

    } catch (err) {
        console.log(err)
    }
};

const bookGet = async (book_id) => {

    try {
        const book = await Book.aggregate([
            {
                $match: {
                    _id: {$eq: mongoose.Types.ObjectId(book_id)}
                }
            },
            {
                $lookup: {
                    from: "authors", // collection name in db
                    localField: "author_id",
                    foreignField: "_id",
                    as: "author"
                }
            }
        ]).exec();

        return book;

    } catch (err) {
        console.log(err)
    }
};

const bookUpdate = async (inputs) => {

    try {
        const oldBook = await Book.findByIdAndUpdate(inputs.book_id, {
            name: inputs.name,
            isbn: inputs.isbn,
            author_id: inputs.author_id
        });
        const newBook = bookGet(inputs.book_id);
        return newBook;
    } catch (err) {
        console.log(err)
    }
};


module.exports = {
    bookCreate,
    bookList,
    bookGet,
    bookUpdate,
}