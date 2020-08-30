import express from 'express';
import cors from 'cors';
import authRouter from './route/auth';
import './model/db';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', authRouter);



export default app;