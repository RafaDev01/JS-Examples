const dataAtual = new Date();

//Retornando o timestamp da data
console.log( dataAtual.getTime() );

 //Para saber a diferença de fuso horário do sistema para o UTC utilizamos o método getTimezoneOffset()
console.log( dataAtual.getTimezoneOffset() );

//Retornando o valor primitivo do objeto
console.log( dataAtual.valueOf() );