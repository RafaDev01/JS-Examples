//podemos desestruturar objetos

let cliente = {
  nome: 'joao',
  email:  'teste@teste.com',
  telefone: 84561358795
}

//O js transforma cada dado do em cliente em cada variavel totalemnte independente
//o obj nao é destruido

//OBS mesmo se definir as variaves abaixo misturadas o js vai interpretar cada uma com base no que tem dentro do obj exp:
//se primeiro for definido email nas variaveis mesmo o email estando no meio do obj ele será atribuido corretamente
let {nome , email , telefone} = cliente
console.log(nome)
console.log(email)
console.log(telefone)