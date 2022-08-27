//if convencional
/*
var nota = 8;
var resultado = ''
if (nota >= 7) {
  resultado = 'Aprovado'
} else {
  resultado = 'Reprovado'
}
console.log(resultado)
*/

//if ternario
var nota = 7.1;

//?true :false
var resultado = nota > 7 ? "Aprovado" : "Reprovado";
console.log(resultado)

//outro exemplo
var mes = 5;

//se mes for igual 11 ou igual 12 -> mensagem = "Promoção", senão mensagem = "Preço normal";
var mensagem = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal";
console.log(mensagem)
