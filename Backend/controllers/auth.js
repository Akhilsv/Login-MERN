import User from '../models/Users.js';
import { registerValidation } from './validation.js';
import jwt from 'jsonwebtoken';
import user from '../models/Users.js';

export const login = async (req, res, next) => {
	// const { error } = loginValidation(req.body);
	// if (error) return res.send(error.details[0].message);

	const emailExist = await User.findOne({ email: req.body.email });


	if (!emailExist) return res.status(400).send('Invalid email');
	if (req.body.password !== emailExist.password) {
		return res.status(400).send('password doesn match');
	}

	const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
	res.header('auth-token', token).send(token);
};

export const register = async (req, res, next) => {
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('Email already exist');

	const { username, email, password } = req.body;
	try {
		const user = await User.create({
			username,
			email,
			password,
		});
		res.status(201).json({
			sucess: true,
			user,
		});
	} catch (error) {
		res.status(500).json({
			sucess: false,
			error: error.message,
		});
	}
};
