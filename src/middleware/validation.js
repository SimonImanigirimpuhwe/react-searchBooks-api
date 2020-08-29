import Joi from '@hapi/joi';

export const registerValidation = (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({error: error.details[0].message});

    next();
};

export const loginValidation = (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({error: error.details[0].message});

    next();
};