//Construtur de uma classe

class Pessoa {

  nome
  idade
  
  //Assim que criar o obj o construtor já adicionará automaticamente o que estiver no bloco de código
  constructor(n, i) {
    this.nome = n
    this.idade = i
  }

  apresentar(){
    return `Olá meu nome é ${this.nome} e minha idade é ${this.idade} anos`
  }
}

  let eu = new Pessoa('Rafael' , 23);
  eu.nome = 'Jubileu'
  console.log(eu.apresentar())
