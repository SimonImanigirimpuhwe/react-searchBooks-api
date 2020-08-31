import request from 'supertest';
import mongoose from 'mongoose';
import server from '../../../src/app';
import {url} from '../../../src/model/db';


describe('validation', () => {
    beforeAll((done) => {
        mongoose.connect(
            url,
            { useNewUrlParser: true, useUnifiedTopology: true},
            () =>{
                mongoose.connection.dropDatabase(() => done())
            })
    });

    it('should return 400 if there is a missing field', async() => {
        const user = {
            name:'yourFullName',
            password:'password'
        }
        const res = await request(server).post('/register').send(user)

        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toMatch(/required/)
    });

    it('should return 400 if name is less than 5 characters', async() => {
        const user = {
            name:'1234',
            email:'validemail@gmail.com',
            password:'password'
        };
        const res = await request(server).post('/register').send(user)

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toMatch(/5 characters/)
    });
    
    it('should return 400 if name is greater than 50 characters', async() => {
        const longName = new Array(52).join('a');
        const user = {
            name: longName,
            email:'validemail@gmail.com',
            password:'password'
        };
        const res = await request(server).post('/register').send(user)

        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toMatch(/50 characters long/)
    });

    it('should return 400 if email is invalid', async() => {
        const user = {
            name: 'yourFullName',
            email: 'invalidEmail.com',
            password:'password'
        };
        const res = await request(server).post('/register').send(user)

        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toMatch(/valid/)
    });

    it('should return 400 if password is less than 6 characters', async() => {
        const user = {
            name: 'youFullName',
            email:'validemail@gmail.com',
            password:'123'
        };
        const res = await request(server).post('/register').send(user)

        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toMatch(/6 characters/)
    });

    it('should return 400 if password is greater than 100 characters', async() => {
        const longPass = new Array(102).join('a');
        const user = {
            name: 'youFullName',
            email: 'validemail@gmail.com',
            password: longPass
        };
        const res = await request(server).post('/register').send(user)

        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toMatch(/100 characters/)
    });

});