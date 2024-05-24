// Importo dotenv
require("dotenv").config();

// Importo express
const express = require('express');

// Inizializzo express
const app = express();

// Definisco le variabili port e host
const port = process.env.PORT || 3000;

// Rotta base
app.get('/', (req, res) => {
    res.send(`<h1>Benvenuto nel mio blog!</h1>`);
});

// Avvio il server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});