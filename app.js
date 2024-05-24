// Importo express
const express = require('express');

// Inizializzo express
const app = express();

// Definisco le variabili port e host
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// Rotta base
app.get('/', (req, res) => {
    res.end(`<h1>Benvenuto nel mio blog!</h1>`);
});