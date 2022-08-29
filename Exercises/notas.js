// Transformar notas escolares

//Algorítmo que transforme notas escolares

/*
* de 90 para cima == A
* entre 80 e 89  ==  B
* entre 70 e 79  ==  C
* entre 60 e 69  ==  D
* menor que 60   ==  F
*/

let nota = 10

  if(nota >= 90){
    nota = "A"
  } else if(nota >= 80) {
    nota = "B"
  }else if(nota >= 70) {
    nota = "C"
  } else if (nota >= 60){
    nota = "D"
  }else{
    nota = "F"
  }

console.log('A nota do aluno é: ' + nota)
