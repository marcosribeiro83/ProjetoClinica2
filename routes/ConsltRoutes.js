const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let ConsltController = require('../controllers/'+config.IConsltController);

let consltController = new ConsltController();



class ConsltRoutes extends IRoutes{

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
      app.get('/Conslt', consltController.show);

      app.get('/Conslt/search', consltController.index)
      
// lista Conslt, filtrando por email
// ex: /Conslt/buscaemail/?email=vaguetti@gmail.com
//=========================
  }
  post(){
    app.post('/Conslt', consltController.store);
// lista Conslt
  }

  listen(){
    app.listen(3000, () => console.log('server started'));
     }

}
module.exports = ConsltRoutes;