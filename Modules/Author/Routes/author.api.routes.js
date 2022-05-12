var express = require('express');
var router = express.Router();
const authorCreateRule = require('../Validation/authorCreateRule')
const authorGetRule = require('../Validation/authorGetRule')
const authorUpdateRule = require('../Validation/authorUpdateRule')
const authorController = require('../Controller/authorController');
const cors = require('cors');


router.use(cors());

router
    .post('/authors', authorCreateRule.rule(), authorController.authorCreateUsingPost)
    .get('/authors', authorController.authorListUsingGet)
    .get('/authors/:auther_id', authorGetRule.rule(), authorController.authorGetUsingGet)
    .put('/authors/:auther_id', authorUpdateRule.rule(), authorController.authorUpdateUsingPut)

module.exports = router;
