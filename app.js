const express = require('express');
const app = express();
const port = 8000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/2', (req, res) => {
    res.sendFile(__dirname + '/second.html');
});
app.get('/3', (req, res) => {
    res.sendFile(__dirname + '/garden.html');
});
app.get('/4', (req, res) => {
    res.sendFile(__dirname + '/kitchen.html');
});
app.get('/5', (req, res) => {
    res.sendFile(__dirname + '/musuem.html');
});
app.get('/6', (req, res) => {
    res.sendFile(__dirname + '/tv.html');
});
app.get('/7', (req, res) => {
    res.sendFile(__dirname + '/404.html');
});
app.use(express.static('public'));
app.use(404, (req, res) => {
    res.status(404).send('Page not found');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});