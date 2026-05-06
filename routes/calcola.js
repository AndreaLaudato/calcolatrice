const express = require('express');
const router = express.Router();
const Operazione = require('../models/operazione');

router.post('/calcola', async (req, res) => { // endpoint che prende i dati dalla fetch di "calcolatrice.html", async perché salvare su Mongo è un'operazione asincrona
    const operazione = new Operazione(req.body); // creazione nuovo documento
    await operazione.save(); // salvataggio documento (await per mettere in pausa il salvataggio senza bloccare il server) 
    res.status(201).json({ success: true, data: operazione }); // rimanda al browser status 201 (successo) e il documento salvato in JSON
});

router.get('/calcola', async (req, res) => { // serve a mostrare nel browser i file attualmente presenti nel DB
    const operazione = await Operazione.find().sort({_id: -1}).limit(20); // await per mettere in pausa la lettura senza bloccare il server
    res.status(200).json({ success: true, data: operazione }); // restituisce al browser i documenti trovati in formato JSON 
});

router.delete('/calcola', async (req, res) => { // serve per cancellare la cronologia dei calcoli
    const operazione = await Operazione.deleteMany({}); // elimina cronologia
    res.status(200).json({ success: true, data: operazione }); // rimanda al browser status 200 (successo)  
});

module.exports = router;