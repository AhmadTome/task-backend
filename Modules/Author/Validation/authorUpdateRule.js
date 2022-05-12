let Joi = require("joi");
const validator = require('express-joi-validation').createValidator({})
Joi.objectId = require('joi-objectid')(Joi)

const rule =  (() => {
    const bodySchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        auther_id: Joi.objectId(),
        _id: Joi.string()
    });

    return validator.body(bodySchema);
});


module.exports = {
    rule
}