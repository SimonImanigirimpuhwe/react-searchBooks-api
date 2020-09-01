import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authentication = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(400).json({error: 'Access Denied'});
    try {
        const secretKey = process.env.SECRETE_KEY;
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        
        next();
    }catch (err) {
        return res.status(400).json({err: 'Invalid token'})
    }
};

export default authentication;