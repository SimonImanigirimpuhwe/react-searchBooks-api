import mongoose from 'mongoose';
import config from '../../config/config';


const options = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
};

const {
    db: { port, host, name}
} = config;

 export const url =  config.db.database_url || `mongodb://${host}:${port}/${name}?authSource=admin`;
 export default mongoose
        .connect(url, options)
        .then(() =>{ 
            console.log(url)
            console.log('MongoDB connected...')
        })
        .catch((err) => {
            console.log(err)
            console.log(url)
        })

