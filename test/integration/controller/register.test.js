import request from 'supertest';
import server from '../../../src/app';
import mongoose from 'mongoose';
import { url } from '../../../src/model/db';
import User from '../../../src/model/user';


describe('Register', () => {
    beforeAll((done) => {
        mongoose.connect(
            url,
            { useUnifiedTopology: true, useNewUrlParser: true },
            () => {
                mongoose.connection.dropDatabase(() => done())
            });
    });
    afterEach(async() => {
        await User.deleteMany()
    });
    
    describe('/register', () => {
        it('should return 400 if user already registered', async() => {
            const user = {
                name: 'yourFullName',
                email: 'anyvalidemail@gmail.com',
                password:'password'
            }
            const newUser = new User(user);
            await newUser.save()
            const res = await request(server).post('/register').send(user)

            expect(res.status).toBe(400)
            expect(res.body).toHaveProperty('error')
        });
        
        it('should create new account', async() => {
            const user = {
                name: 'yourFullName',
                email: 'anyvalidemail@gmail.com',
                password:'password'
            };

            const res = await request(server).post('/register').send(user)

            expect(res.status).toBe(201)
            expect(res.body).toHaveProperty('msg')
            expect(res.body).toHaveProperty('body')
        })
    })
})