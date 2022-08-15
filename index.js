const express = require('express'), path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/public/HTML/home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/HTML/home.html'));
});

app.get('/tees', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/HTML/tees.html'));
});

app.get('/sweaters', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/HTML/sweaters.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/HTML/contact.html'));
});

app.get('/specials', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/HTML/specials.html'));
});

app.listen(8080, () => console.log('Your app is running on port 8080'));