const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const BUILD_DIR = __dirname + '/dist';

app.use(express.static(BUILD_DIR));

app.get('/login', (req, res) => {
  res.sendFile('index.html', { root: BUILD_DIR })
});

app.get('/*', (req, res) => {
  res.status(404).send('Page not found!');
})

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
