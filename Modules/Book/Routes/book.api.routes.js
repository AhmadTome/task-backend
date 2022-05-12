var express = require('express');
var router = express.Router();
const bookController = require('../Controller/bookController');
const bookCreateRule = require("../../Book/Validation/bookCreateRule");
const bookGetRule = require("../../Book/Validation/bookGetRule");
const bookUpdateRule = require("../../Book/Validation/bookUpdateRule");
const cors = require('cors');

router.use(cors());

router
    .post('/books', bookCreateRule.rule(), bookController.bookCreateUsingPost)
    .get('/books', bookController.bookListUsingGet)
    .get('/books/:book_id', bookGetRule.rule(), bookController.bookGetUsingGet)
    .put('/books/:book_id', bookUpdateRule.rule(), bookController.bookUpdateUsingPut)

module.exports = router;
