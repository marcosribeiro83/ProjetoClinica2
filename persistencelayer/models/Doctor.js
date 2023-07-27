const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema(
    {
      CRO: String
    });

module.exports = mongoose.model('Doctor', DoctorSchema);