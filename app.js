// Importo dotenv
require("dotenv").config();

// Importo express
const express = require('express');

// Inizializzo express
const app = express();

// Definisco le variabili port e host
const port = process.env.PORT || 3000;

// Posts controller
const posts = require('./controllers/posts.js');

// Definisco la cartella public
app.use(express.static('public'));

// Middleware
app.use(express.json());

// Rotta base
app.get('/', (req, res) => {
    res.end(`<h1>Benvenuto nel mio blog!</h1>`);
});

// Rotta dei post in GET
app.get('/posts', posts.get);

// Rotta dei post in POST
app.post('/posts', posts.post);

// Avvio il server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});