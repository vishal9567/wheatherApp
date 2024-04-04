import Joi from 'joi'

const schema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30),
        
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,8}$')).required(),

    email: Joi.string()
        .email().required()
})

export default schema;