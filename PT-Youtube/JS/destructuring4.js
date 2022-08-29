//podemos desestruturar objetos

let cliente = {
  nome: 'joao',
  email:  'teste@teste.com',
  telefone: 84561358795
}

//Podemos alterar o nome da variavel e ainda definir valores padrão para prorpiedades que não existem
//se a profissão existir dentro do obj ela não será preenchida com o valor indefinido abaixo
let {nome: nome_completo , email: endereco_email , telefone: telefone_celular, profissão = 'Indefinido'} = cliente
console.log(nome_completo)
console.log(endereco_email)
console.log(telefone_celular)
console.log(profissão)

console.log('-'.repeat(100))

let fornecedor1 = {
  marca: 'microsoft',
  produto: 'Windonws 11'
}

let {area =  'software' , produto: software = 'Windows' , marca: empresa = 'default'} = fornecedor1;

console.log(area)
console.log(software)
console.log(empresa)