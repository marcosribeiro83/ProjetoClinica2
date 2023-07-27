const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let PersonController = require('../controllers/'+config.IPersonController);

let personController = new PersonController();



class PersonRoutes extends IRoutes{

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
      app.get('/Person', personController.show);

      app.get('/Person/search', personController.index)
      
// lista Person, filtrando por email
// ex: /Person/buscaemail/?email=vaguetti@gmail.com
//=========================
  }
  post(){
    app.post('/Person', personController.store);
// lista Person
  }

  listen(){
    app.listen(3000, () => console.log('server started'));
     }

}
module.exports = PersonRoutes;