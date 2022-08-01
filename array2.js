var notas_bimestre = [
  7, 6, 8, 5
];

//Passando o tamanho do array para a variável total_notas
var total_notas = notas_bimestre.length;

//Somando todas as notas e atribuindo o valor a variável soma_notas
var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3]; 

//fazendo a divisão com o tamanho do array
var media_aluno = soma_notas / total_notas; 

console.log("Média do aluno: " + media_aluno); // Média do aluno: 6.5