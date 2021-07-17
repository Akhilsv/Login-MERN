
import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    const token = req.header('auth');
    console.log(token);
    if (!token) return res.status(401).send('Acess Denied')
    
    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        req.user = verified;
        console.log(req.user);
        next();
    } catch (error) {
        res.status(401).send('in valid token');
    }

}