const express = require('express'), path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/public/HTML/home.html'));
});

app.listen(8080, () => console.log('Your app is running on port 8080'));