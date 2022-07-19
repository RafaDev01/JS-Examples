let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
/*
-> O método indexOf() retorna a posição da substring dentro da string.
-> Quando o método indexOf encontra a substring dentro de uma string, ele retorna a posição onde a substring foi encontrada. Caso não encontre ele retorna o valor -1. 
-> O método indexOf é um ótimo recurso da linguagem JavaScript para encontrar termos simples dentro de textos grandes 
*/

//.indexOf("String a ser procurada")
let posicao = frase.indexOf("sonho");

console.log(posicao); // 14