const IPersonController = require('./IPersonController.js');


const config = require('../config.js');
const PersonDAO = require('../persistencelayer/dao/'+config.IPersonDAO);
let persondao = new PersonDAO();

class PersonController extends IPersonController{
  constructor(){
    super();
       
  }
  
  async show(req, res)
    {
  
       let persons = await persondao.recovery();
        return res.json(persons);
    }
  async store(req, res)
     {
        const person =  await persondao.create(req);
        return res.json(person);
     }
   async destroy(req,res){
         let person = await persondao.delete(req);
         return res.json(person);
    }
   async update(req,res){
        let person = await persondao.update(req);
        return res.json(person);
    }

   async index(req,res)
    {
        let persons = await persondao.search(req);
        return res.json(persons);
    }
  
}
module.exports = PersonController;