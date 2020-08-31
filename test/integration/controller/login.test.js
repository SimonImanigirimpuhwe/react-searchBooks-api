import request from 'supertest';
import mongoose from 'mongoose';
import server from '../../../src/app';
import {url} from '../../../src/model/db';


describe('login', () => {
    beforeAll((done) => {
        mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},
            () => {
                mongoose.connection.dropDatabase(() => done())
            })       
    });
    beforeEach(async() => {
            const user = {
                name:'yourname',
                email:'test@gmail.com',
                password:'password'
            };
           return await request(server).post('/register').send(user)
        })
    describe('/login', () => {
        it('should return 400 if email is invalid', async(done) => {
            const user = {
                email: 'wrong@gmail.com',
                password: 'password'
            };
            const res = await request(server).post('/login').send(user);

            expect(res.status).toBe(400)
            expect(res.body).toHaveProperty('error')
            done();
        });
        it('should return 400 if password is invalid', async(done) => {
            const user = {
                email:'test@gmail.com',
                password: 'wrongpassword'
            };
            const res = await request(server).post('/login').send(user);

            expect(res.status).toBe(400)
            expect(res.body).toHaveProperty('error')
            done();
        });
        it('should allow login if valid data passed', async(done) => {
            const user = {
                email:'test@gmail.com',
                password: 'password'
            };
            const res = await request(server).post('/login').send(user)

            expect(res.status).toBe(200)
            expect(res.body).toHaveProperty('msg')
            expect(res.body).toHaveProperty('token')
            expect(res.body.msg).toMatch(/logged/)

            done();
        })
    })
})