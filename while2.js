let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let contador = 1;
let parcelas_totais = 5;

//Enquanto contador for menor ou igual a parcelas totais 
while ( contador <= parcelas_totais ) {

  //numero de parcelas recebe o contador
    let numero_parcela = contador;

    //calculo do juros
    var juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$" + juros_emprestimo + ",00");

    contador++;

}

let total = capital_emprestado + juros_emprestimo;

console.log("O valor total do a ser pago será de: "+ total + ",00")