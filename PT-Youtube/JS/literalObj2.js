let nacionalidade = 'Brazil'


const cliente = {
  nome: 'Joao',
  apelido: 'Paulo',
  'tipo cliente': 'VIP',
  [nacionalidade]: 'br'
};

cliente.telefone = 78945610

console.log(cliente.nome);
console.log(cliente['telefone']);

console.log(cliente)

delete cliente.telefone

console.log(cliente.telefone);

console.log(cliente["tipo cliente"])

console.log(cliente.Brazil)

