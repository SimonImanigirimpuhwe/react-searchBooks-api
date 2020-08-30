import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const options = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
}
const url = process.env.DATABASE_URL;

export default mongoose
                .connect(url, options)
                .then(() => console.log('MongoDB connected...'))
                .catch((err) => {throw new Error(err)})

