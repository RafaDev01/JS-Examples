//A estrutura for .. of permite percorrer valores de uma coleção de dados
let emails_alunos = [
  "danilo@email.com",
  "jessica@email.com",
  "luana@email.com",
  "gustavo@email.com"
];

//Os valores do Array serão percorridos e em cada iteração um valor será atribuído a variavel email
for ( let email of emails_alunos ) {

  console.log("Email: " + email);

}