// podemos usar desestruturação numa iteração

console.clear();

let cliente = {
  nome: 'Rafael',
  apelido: 'coruja',
  idade: 23
}

//transformando em chave e valor todas as entradas do objeto cliente
for(let [key,value] of Object.entries(cliente)){
  console.log(`${key} : ${value}`)
}

console.log('-'.repeat(100))

//Podemos trocar o valor de duas variaveis entre si

let valor1 = 1000;
let valor2 = 5000;
[valor1 , valor2] = [valor2 , valor1];

console.log(valor1)
console.log(valor2)

console.log('-'.repeat(100))

//podemos usar reticencias para definir o resto

let [n1 , n2] = ['antonio','Pablo' , 'Jacaré' , 'Pedro' , 'Cleyton']
//no caso acima os valores 'Jacaré' , 'Pedro' , 'Cleyton' foram ignorados
//O 'Resto' foi ignorado na desestruturação
//Para isso podemos fazer o seguinte:
console.log(n1)
console.log(n2)

console.log('-'.repeat(100))

let [nn1, nn2 , ...nn] = ['antonio','Pablo' , 'Jacaré' , 'Pedro' , 'Cleyton']
console.log(nn1);
console.log(nn2);
console.log(nn);

console.log('-'.repeat(100))

//definindo valores padrão
let fornecedores = ['apple' , 'asus' , 'MS'];
//se o valor do forncedor 3 estiver disponivel no array acima ele ignora o indefinido
[fornecedor1 , fornecedor2 , fornecedor3 = 'Indefinido'] = fornecedores;
console.log(fornecedor1)
console.log(fornecedor2)
console.log(fornecedor3)

