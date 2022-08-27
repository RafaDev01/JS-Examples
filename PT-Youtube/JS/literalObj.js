//objeto literal 

let cliente = {
  nome: 'Paulo',
  apelido: 'Roberto',
  telefone: 7897465456789,

  nome_completo: function() {
    return this.nome + ' ' + this.apelido
  },

  alterar_nome: function(novo_nome) {
    this.nome = novo_nome
  }
};

console.log(cliente.alterar_nome('Jubileu'))
console.log(cliente.nome_completo())
