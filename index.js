const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
   res.render('HTML/home');
});

app.get('/home', (req, res) => {
    res.render('HTML/home');
});

app.get('/tees', (req, res) => {
    res.render('HTML/tees');
});

app.get('/sweaters', (req, res) => {
    res.render('HTML/sweaters');
});

app.get('/contact', (req, res) => {
    res.render('HTML/contact');
});

app.get('/specials', (req, res) => {
    res.render('HTML/specials');
});

app.listen(8080, () => console.log('Your app is running on port 8080'));