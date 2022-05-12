const Joi = require("joi");
const validator = require('express-joi-validation').createValidator({})

const rule =  (() => {
    const bodySchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    });

    return validator.body(bodySchema);
});


module.exports = {
    rule
}