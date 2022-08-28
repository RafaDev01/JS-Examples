//Declaração de sintaxe especial que permite transformar elementos de um array ou propriedades de um objeto em variaveis separadas

console.clear();

//arrays

let nomes = ['Paulo' , 'Ryan', 'Rickson', 'Gracie', 'Royce' , 'Shark'];
//Atrabuindo cada em cada index pra cada variavel
let [nome1,nome2,nome3,nome4,nome5] = nomes;
console.log(nome1)
console.log(nome2)
console.log(nome3)
console.log(nome4)
console.log(nome5)

//repete o que foi pedido
console.log('-'.repeat(100));

//podemos usar a mesma sintaxe com métodos que retornam arrays
//por exemplo o método split de uma string

let nome_completo = 'João ribeiro';
let [nome, apelido] = nome_completo.split(' ')
console.log(nome)
console.log(apelido)

//podemos desestruturar qualquer variavel iteráveis -> map, set , etc
let palavra = 'Teste'
let [letra1,letra2,,letra4] = palavra
console.log(letra1)
console.log(letra2)
console.log(letra4)

console.log('-'.repeat(100));

//Outro caso
let usuario = {};
[usuario.nome , usuario.apelido] = "Joao ribeiro".split(' ');
console.log(usuario.nome)
console.log(usuario.apelido)
console.log(usuario)