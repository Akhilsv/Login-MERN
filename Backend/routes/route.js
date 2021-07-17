import express from 'express';
const router = express.Router();
import { login, register } from '../controllers/auth.js';


router.post('/login',login);
// router.route('/login').post(login); another way
router.route('/register').post(register);

export default router;
