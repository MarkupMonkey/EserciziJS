const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send(`<h1>Home</h1>`);
});

app.get('/about', (req, res) => {
 res.send(`<h1>About</h1>`);
});

app.get('/contatti', (req, res) => {
 res.send(`<h1>Contatti</h1>`);
});

app.all('*', (req, res) => {
 res.send(`<h1>404 risorsa non trovata</h1>`);
});

app.listen(4600);
