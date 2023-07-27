const mongoose = require('mongoose');

const IDoctorDAO = require('./IDoctorDAO.js');

const Doctor = require('../models/Doctor');


class DoctorDAO_Mongoose extends IDoctorDAO {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://boss:Siriqueijo@myclusterclinica.efiiivs.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('Conectamos com Sucesso')
      app.listen(3000)
    }).catch((err) => console.log(err))
  }
  async create(req) {

    const doctor = await Doctor.create(req.body);
    return doctor;
  }
  async recovery() {
    let doctors = await Doctor.find();
    return doctors;
  }
  async update(req) {
    let doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body,
      { new: true });
    return doctor;

  }
  async delete(req) {
    let doctor = await Doctor.findByIdAndRemove(req.params.id);
    return doctor;
  }

  async search(req) {
    let doctors = await Doctor.find(
      { nome: req.query.nome }
    );
    return doctors;

  }


}
module.exports = DoctorDAO_Mongoose;