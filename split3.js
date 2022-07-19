let nome_completo = "Ana Mendes da Silva";

let array = nome_completo.split(" ");

let nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)"); // Olá Ana, seja bem vindo(a)

//exemplo onde precisamos obter o primeiro nome da string “nome_completo”. Com o método split() separamos a string em diversas substrings e depois acessamos o primeiro índice do array, que contém o nome que desejamos.