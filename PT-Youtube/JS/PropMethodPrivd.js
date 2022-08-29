class Pessoa {
  //# transforma em privado
  #nome
  #idade
  
  constructor(n, i){
    this.#nome = n
    this.idade - i
  }


 
  setNome(nome){
    if(nome == 'rafael'){
        this.#nome = 'Rafael teste teste'.toUpperCase();
      } else {
        this.#nome = nome.toUpperCase();
      }
    }
    

  getNome(){
    return this.#nome
  }

  #apresentar_interno(){
    console.log('Nome ' + this.#nome)
  }

  apresentar(){
    this.#apresentar_interno();
  }

}

let eu = new Pessoa('ana' , 23);
eu.apresentar();
//eu.setNome('rafael')
//console.log(eu.getNome())