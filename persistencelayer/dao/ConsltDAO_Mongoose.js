const mongoose = require('mongoose');

const IConsltDAO = require('./IConsltDAO.js');

const Conslt = require('../models/Conslt');


class ConsltDAO_Mongoose extends IConsltDAO {

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

    const conslt = await Conslt.create(req.body);
    return conslt;
  }
  async recovery() {
    let conslts = await Conslt.find();
    return conslts;
  }
  async update(req) {
    let conslt = await Conslt.findByIdAndUpdate(req.params.id, req.body,
      { new: true });
    return conslt;

  }
  async delete(req) {
    let conslt = await Conslt.findByIdAndRemove(req.params.id);
    return conslt;
  }

  async search(req) {
    let conslts = await Conslt.find(
      { nome: req.query.nome }
    );
    return conslts;

  }


}
module.exports = ConsltDAO_Mongoose;