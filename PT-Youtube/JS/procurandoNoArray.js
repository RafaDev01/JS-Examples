const clientes = [
  {nome: 'Paulo' , idade: 40},
  {nome: 'Aline' , idade: 23},
  {nome: 'Pedro' , idade: 30},
  {nome: 'Clara' , idade: 18},
  {nome: 'Maycon' , idade: 33},
  {nome: 'Rafael' , idade: 23},
  {nome: 'Gabriel' , idade: 26},
  {nome: 'Amauri' , idade: 23},
  {nome: 'Jubileu' , idade: 12},
];

//ciclo que procura a primeira ocorrencia pretendida
//se for encontrada devolve o que foi pedido
let cliente = clientes.find(cli => cli.nome == "Maycon")
console.log(cliente)

//devolvendo o index cujo o cliente seja idade == 69 -> caso não exista devolverá -1
clienteIndex = clientes.findIndex(cli => cli.idade == 69)
console.log(clienteIndex)

//O metodo filter devolve todos os elementos nã o parando só no priemiro encontrado
console.log(clientes.filter(cli => cli.idade >= 23))
