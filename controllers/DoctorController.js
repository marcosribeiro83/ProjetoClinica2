const IDoctorController = require('./IDoctorController.js');


const config = require('../config.js');
const DoctorDAO = require('../persistencelayer/dao/'+config.IDoctorDAO);
let doctordao = new DoctorDAO();

class DoctorController extends IDoctorController{
  constructor(){
    super();
       
  }
  
  async show(req, res)
    {
  
       let doctors = await Doctordao.recovery();
        return res.json(doctors);
    }
  async store(req, res)
     {
        const doctor =  await Doctordao.create(req);
        return res.json(doctor);
     }
   async destroy(req,res){
         let doctor = await Doctordao.delete(req);
         return res.json(doctor);
    }
   async update(req,res){
        let doctor = await Doctordao.update(req);
        return res.json(doctor);
    }

   async index(req,res)
    {
        let doctors = await Doctordao.search(req);
        return res.json(doctors);
    }
  
}
module.exports = DoctorController;