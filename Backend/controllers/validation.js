import Joi from '@hapi/joi';

export const registerValidation = (data) => {
    const joiSchema = {
			username: Joi.string().required(),
			email: Joi.string().min(6).email(),
			password: Joi.string().min(6).required(),
    };
    
   return  Joi.validate(data,joiSchema);
}

