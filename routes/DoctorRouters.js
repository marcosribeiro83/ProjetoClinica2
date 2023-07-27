const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let DoctorController = require('../controllers/'+config.IDoctorController);

let doctorController = new DoctorController();



class DoctorRoutes extends IRoutes{

  constructor() {   
    super();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  
} // finaliza construtor

  get(){
      app.get('/', (req, res) => {
      res.send('Rest API com Polimorfismo');
      });
      app.get('/Doctor', doctorController.show);

      app.get('/Doctor/search', doctorController.index)
      
// lista Doctor, filtrando por email
// ex: /Doctor/buscaemail/?email=vaguetti@gmail.com
//=========================
  }
  post(){
    app.post('/Doctor', doctorController.store);
// lista Doctor
  }

  listen(){
    app.listen(3000, () => console.log('server started'));
     }

}
module.exports = DoctorRoutes;