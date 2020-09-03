import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import generateToken from '../../../src/helper/authent';

describe('Generate jwt', () => {
    it('should return a jwt token', async(done) => {
        const payload = {
            _id: mongoose.Types.ObjectId().toHexString(),
            email:'validemail@gmail.com'
        };
        const token = await generateToken(payload);
        const decoded = await jwt.verify(token, process.env.SECRET_KEY)

        expect(decoded).toMatchObject(payload)

        done()
    });

    it('should throw error if payload is invalid', () => {
        expect(() => generateToken(null)).toThrow()

    });
});