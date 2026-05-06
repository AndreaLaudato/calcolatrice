const mongoose = require('mongoose');

const operazioneSchema = new mongoose.Schema({ // creazione Schema per evitare dati inconsistenti
    NumA: mongoose.Schema.Types.Mixed, // uso "Types.Mixed" per salvare sia il numero che il 'Nan' in caso di input errato
    op: String,
    NumB: mongoose.Schema.Types.Mixed,
    risultato: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model('Operazione', operazioneSchema); // crea il model Operazione e lo esporta con lo schema