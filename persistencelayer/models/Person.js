const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema(
    {
          nome: String,
          dataNasc: Date,
          endereco: String,
          email: String
    }
);

module.exports = mongoose.model('Person', PersonSchema);