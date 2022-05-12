const authorQueries = require('../queries/authorQueries')
const {authorCreateInput} = require('../inputs/authorCreateInput')
const {authorUpdateInput} = require('../inputs/authorUpdateInput')
const Author = require("../Schema/authorSchema");

const authorCreateUsingPost = (async (req, res) => {
    const inputs = new authorCreateInput(req.body);
    const result = await authorQueries.authorCreate(inputs);
    return res.json({
        'author': result
    });
});

const authorGetUsingGet = (async (req, res) => {
    const {auther_id} = req.params;
    const result = await authorQueries.authorGet(auther_id);
    return res.json({
        'author': result
    });
});

const authorListUsingGet = (async (req, res) => {
    const {page = 1, page_size = 10} = req.query;
    const result = await authorQueries.authorList(page, page_size);
    const count = await Author.find({}).count();
    return res.json({
        'authors': result,
        'count': count,

    });
});

const authorUpdateUsingPut = (async (req, res) => {
    const inputs = new authorUpdateInput({...req.body, ...req.params});
    const result = await authorQueries.authorUpdate(inputs);
    return res.json({
        'author': result
    });
});


module.exports = {
    authorCreateUsingPost,
    authorListUsingGet,
    authorGetUsingGet,
    authorUpdateUsingPut,
}