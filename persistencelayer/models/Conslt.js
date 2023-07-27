const mongoose = require('mongoose');

const ConsltSchema = new mongoose.Schema(
    {
      dataConslt: String,
      hrConslt: String
    }
);

module.exports = mongoose.model('Conslt', ConsltSchema);