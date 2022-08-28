let clientes = [
  {nome: 'Paulo' , idade: 40},
  {nome: 'Aline' , idade: 23},
  {nome: 'Pedro' , idade: 30},
  {nome: 'Clara' , idade: 18},
  {nome: 'Maycon' , idade: 33},
  {nome: 'Rafael' , idade: 23},
  {nome: 'Gabriel' , idade: 26},
  {nome: 'Amauri' , idade: 69},
  {nome: 'Jubileu' , idade: 12},
];

//percorre a coleção de objetos 
clientes.forEach(cliente => {
  console.log(`O(a) cliente ${cliente.nome} tem ${cliente.idade} anos de idade\n\n\n\n`)
})

//Fazendo com for
for(let i = 0; i < clientes.length; i++){
  console.log(`O(a) cliente ${clientes[i].nome} tem ${clientes[i].idade} anos de idade`)
}

