const bookQueries = require('../queries/bookQueries')
const {bookCreateInput} = require('../inputs/bookCreateInput')
const {bookUpdateInput} = require('../inputs/bookUpdateInput')
const Author = require("../../Author/Schema/authorSchema");
const Book = require("../../Book/Schema/bookSchema");

const bookCreateUsingPost = (async (req, res) => {
    const inputs = new bookCreateInput(req.body);
    const result = await bookQueries.bookCreate(inputs);
    return res.json({
        'book': result
    });
});

const bookGetUsingGet = (async (req, res) => {
    const {book_id} = req.params;
    const result = await bookQueries.bookGet(book_id);
    return res.json({
        'book': result
    });
});

const bookListUsingGet = (async (req, res) => {
    const {page = 1, page_size = 10} = req.query;
    const result = await bookQueries.bookList(page, page_size);
    const count = await Book.find({}).count();

    return res.json({
        'books': result,
        'count': count
    });
});

const bookUpdateUsingPut = (async (req, res) => {
    const inputs = new bookUpdateInput({...req.body, ...req.params});

    const result = await bookQueries.bookUpdate(inputs);
    return res.json({
        'book': result
    });
});


module.exports = {
    bookCreateUsingPost,
    bookListUsingGet,
    bookGetUsingGet,
    bookUpdateUsingPut,
}