let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

/*
-> O método split() é muito útil para extrair dados de strings maiores. Assim é importante saber como é a composição da string para identificar o caractere que será usado como separador 
*/

//.split("caractere_usado_pare_separar_a_string")
let paises_array = paises_string.split(" ");

console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]