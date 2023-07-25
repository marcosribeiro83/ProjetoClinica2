const PessoaDAO = require('./PessoaDAO.js');
class PessoaDAO_MySQL extends PessoaDAO{
  constructor(objeto){
    super(objeto);
  }
  create() {
    return "Criou no MySQL";
  }
  recovery(){
    return "Recuperou no MySQL";
  }
}
module.exports = PessoaDAO_MySQL;