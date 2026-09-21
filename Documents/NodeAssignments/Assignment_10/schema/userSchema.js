const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(16).max(100).required(), // Valid range constraint
    course: Joi.string().required()
});

module.exports = userSchema;