import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './route/auth';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', authRouter);


const options = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
}
const url = process.env.DATABASE_URL;

mongoose
    .connect(url, options)
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => {throw new Error(err)})

export default app;