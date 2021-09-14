console.log('Hello from Node.js');
const Joi = require('joi');
const passwordSchema = Joi.string().min(3).max(10).alphanum();
console.log(passwordSchema.validate('qqwweee'));