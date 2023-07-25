const Pessoa = require('./Pessoa.js');
class Cliente extends Pessoa{
  constructor(peso,altura){
    super(peso,altura);
  }
   imc(){ // indice de massa corpórea
          let imc = this.peso / (this.altura * 3);
          return imc;
    }
}
module.exports = Cliente;