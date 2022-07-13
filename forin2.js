let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

//for (propriedade / objeto)
for ( let propriedade in carro ) {

    if ( propriedade == "preco" ) {

        let preco = propriedade;

        //aqui pegamos o valor da propriedade preço e a manipulamos
        let desconto = ( carro[preco] * percentual_desconto ) / 100;

        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else {

        //valor da propriedade
        console.log(propriedade + ": " + carro[propriedade]);

    }

}