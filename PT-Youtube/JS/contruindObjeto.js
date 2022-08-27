//Contrutor do objeto
function Pessoa(nm , ap , tlf) {
  this.nome = nm;
  this.apelido = ap;
  this.telefone = tlf;

  this.nome_completo = function () {
    return this.nome + " " + this.apelido
  }

  this.alterar_nome = function (novo_nome) {
    this.nome = novo_nome
  }

}

let cliente1 = new Pessoa ('Joao' , 'Paulo' , 119706588478);

console.log(cliente1.nome , cliente1.apelido)
console.log(cliente1.nome_completo())
cliente1.alterar_nome('Novo nome');
console.log(cliente1.nome_completo())
