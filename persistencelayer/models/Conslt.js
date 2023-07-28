const mongoose = require('mongoose');

const ConsltSchema = new mongoose.Schema(
    {
      dataConslt: Date,
      hrConslt: Date
    }
);

module.exports = mongoose.model('Conslt', ConsltSchema);