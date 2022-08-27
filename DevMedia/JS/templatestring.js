let linguagem = "JavaScript";
let stack = "mobile";

/*
Usando template string ${} e switch case

->Utilizar template string melhora a legibilidade permitindo inserir variáveis junto com o texto, ou seja, tudo dentro de acentos graves 
*/
switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}