const Joi = require("joi");
const validator = require('express-joi-validation').createValidator({})
Joi.objectId = require('joi-objectid')(Joi)

const rule =  (() => {
    const bodySchema = Joi.object({
        name: Joi.string().required(),
        isbn: Joi.string().required(),
        author_id: Joi.objectId(),
        _id: Joi.string()
    });

    return validator.body(bodySchema);
});


module.exports = {
    rule
}