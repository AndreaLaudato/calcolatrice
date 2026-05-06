const express = require('express'); 
const mongoose = require('mongoose');
const path = require('path');
const calcolaRouter = require('./routes/calcola');

const app = express();

app.use(express.json()); // leggere i json in entrata
app.use(express.static(path.join(__dirname, 'public'))); // serve i file statici da public

mongoose.connect('mongodb://127.0.0.1:27017/calcolatrice'); // connessione a Mongo/creazione DB se non esiste

app.use('/', calcolaRouter); // connessione al router

app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
});