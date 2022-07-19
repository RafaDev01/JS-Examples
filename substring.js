let frase = "Eu sou programador JavaScript";

/*
-> Quando você souber a quantidade exata de caracteres que a substring terá prefira o método substr(). Caso contrário a melhor opção é trabalhar com os índices inicial e final da substring 
*/

//a substring extraída da variável começa na posição 7 e termina na posição 18
let resultado = frase.substring(7, 18);

console.log(resultado); // programador