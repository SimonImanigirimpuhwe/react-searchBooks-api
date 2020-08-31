import express from 'express';
import cors from 'cors';
import authRouter from './route/auth';
import './model/db';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', authRouter);

app.use('/', (req, res) => {
    res.status(200).json({message: 'You reached to psychology books finder'})
})


export default app;