import express from 'express';

const app = express(); // Create an Express application instance
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/api/send', (req, res) => {
    res.status(200).json({ "message" : " Hello World"});
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});