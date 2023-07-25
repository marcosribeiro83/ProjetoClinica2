class Pessoa {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    imc(){ // indice de massa corpórea
          let imc = this.peso / (this.altura * this.altura);
          return imc;
    }
}
module.exports = Pessoa;