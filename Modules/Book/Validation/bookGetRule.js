const Joi = require("joi");
const validator = require('express-joi-validation').createValidator({})
Joi.objectId = require('joi-objectid')(Joi)

const rule =  (() => {
    const paramsSchema = Joi.object({
        book_id: Joi.objectId(),
    });

    return validator.params(paramsSchema);
});


module.exports = {
    rule
}