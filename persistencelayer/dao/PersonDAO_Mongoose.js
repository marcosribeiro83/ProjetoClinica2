const mongoose = require('mongoose');

const IPersonDAO = require('./IPersonDAO.js');

const Person = require('../models/Person');


class PersonDAO_Mongoose extends IPersonDAO {

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

    const person = await Person.create(req.body);
    return Person;
  }
  async recovery() {
    let persons = await Person.find();
    return persons;
  }
  async update(req) {
    let person = await Person.findByIdAndUpdate(req.params.id, req.body,
      { new: true });
    return person;

  }
  async delete(req) {
    let person = await Person.findByIdAndRemove(req.params.id);
    return person;
  }

  async search(req) {
    let persons = await Person.find(
      { nome: req.query.nome }
    );
    return persons;

  }


}
module.exports = PersonDAO_Mongoose;