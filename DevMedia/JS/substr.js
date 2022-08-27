let frase = "Estou aprendendo JavaScript na DevMedia";

/*
-> Quando você souber a quantidade exata de caracteres que a substring terá prefira o método substr(). Caso contrário a melhor opção é trabalhar com os índices inicial e final da substring 
*/

//a substr extraída da frase começa na posição 17 e tem 10 caracteres
let resultado = frase.substr(17, 10);

console.log(resultado); // JavaScript