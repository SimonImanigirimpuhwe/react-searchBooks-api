import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();       

const generateToken = (data) => {
    const { email, _id } = data;
    const secretKey = process.env.SECRET_KEY;
    try {
        const token = jwt.sign(
            { email, _id }, 
            secretKey, 
            {
                algorithm:'HS256',
                expiresIn: '5d'
            });
        return token;
    } catch (err) {
        throw new Error('Unable to generate token')
    }
};

export default generateToken;