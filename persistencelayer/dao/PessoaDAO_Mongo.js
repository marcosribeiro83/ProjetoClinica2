const PessoaDAO = require('./PessoaDAO.js');
class PessoaDAO_MongoDB extends PessoaDAO{
  constructor(objeto){
    super(objeto);
  }
  create() {
    return "Criou no MongoDB";
  }
  recovery(){
    return "Recuperou no MongoDB";
  }
}
module.exports = PessoaDAO_MongoDB;