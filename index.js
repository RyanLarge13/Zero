const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('/HTML'));

app.get('/', (req, res) => {
  res.sendFile('/HTML/home.html')
});

app.listen(8080, () => console.log('Your app is running on port 8080'));