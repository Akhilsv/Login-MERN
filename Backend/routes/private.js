import express from 'express';
const router = express.Router();
import verify from '../controllers/jwtvalidation.js'

router.get('/user',verify, (req, res) => {
	res.json('PRivate route');
	
});

export default router;
