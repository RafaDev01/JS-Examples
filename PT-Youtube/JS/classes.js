class Pessoa {
  'use strict'

  //Propriedades | fields | campos
  nome
  apelido
  idade

  //metodo
  apresentar(){
    return `Olá meu nome é ${this.nome} e minha idade é ${this.idade} anos`
  }
}

let eu = new Pessoa();
let tu = new Pessoa();

eu.nome = 'Rafael'
eu.apelido = 'Coruja'
eu.idade = 23

console.log(eu.apresentar())

tu.nome = 'Ana'
tu.apelido = 'Silva'
tu.idade = 25
