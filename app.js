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

// Rotta base
app.get('/', (req, res) => {
    res.end(`<h1>Benvenuto nel mio blog!</h1>`);
});

// Rotta dei post
app.get('/posts', posts.get);

// Avvio il server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});