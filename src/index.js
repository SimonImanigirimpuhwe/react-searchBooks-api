import app from './app';

app.use('/', (req, res) => {
    res.status(200).json({message: 'You reached to psychology books finder'})
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app running on port ${PORT}`));