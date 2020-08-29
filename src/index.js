import app from './app';

app.use('/', (req, res) => {
    res.status(200).json({message: 'You reached to psychology books finder'})
})
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app running on port ${port}`))