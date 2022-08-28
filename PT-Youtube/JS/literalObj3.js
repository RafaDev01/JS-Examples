
const cliente = {
  nome: 'Joao',
  apelido: 'Paulo',
  telefone: 54745137965156
};

//verificando se a propriedade existe
//console.log('telefone' in cliente)
//console.log('apelido' in cliente)

for (chave in cliente) {
  console.log(chave + ' : ' + cliente[chave])
}