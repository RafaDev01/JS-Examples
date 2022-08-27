let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

/*
Preenche uma string com algum caractere no inicio

->Com os métodos padStart() e padEnd() é possível alinhar informações com a linguagem JavaScript de forma que a exibição dos dados não fique desordenada 
*/

//padStart(total_caracteres_que_a_string_terá, "Caractere_para_combinar_no_inicio_da_string")
console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);

console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

//Foi adicionado espeços espaços em branco até que as strings ficasse com 20 caracteres
//                Aluno: Edmilson
// Grau de escolaridade: Ensino Médio Completo