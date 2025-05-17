/**
 
 Funções do javascript
Number -> converte qualquer dado para numero
parseInt -> converte qualquer variavel para int
parseFloat -> converte qualquer variavel para float
isNaN -> retorna um boleano se o conteudo é nan ou notnan

 */
//! escopo
/**function nomeDafunção (){

}
nomeDafunção();
*/

//* implementação da função "saudação"
//                  nomeDoAluno -> variavel escopada criado dentro da função
function saudação1(nomeDoEstudante, curso) {
  //parametros separado por virguças
  console.log("ola,", nomeDoEstudante, "!");
  // template strig || template literals
  console.log(`Olá,${nomeDoEstudante}!`); // template string ou literals -> para tirar o espaço antes da esclamações e afins
  //
  console.log(`Olá, seja bem Vindo(a) ao curso de ${curso}`);
}
//* chamada da função "saudação"
//        "luiz", parametro nomeDoAluno
saudação1("luiz", "Front-end em React");

//obs função para retorna um conteudo
//! escopo
/** function saudação(){
  return
}
*/
//                               parametro se não for passado outro parametro
function saudação(nomeDoAluno, curso = "Front-end em React") {
  return `Olá, ${nomeDoAluno}! Seja bem-vindo ao curso de ${curso}!`;
}
const mensagemDasaudação = saudação("LuizHenrique", "Front-end em React");
console.log(mensagemDasaudação);

//exerc 1

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);
console.log(resultado);
console.log(resultado / 10);
console.clear;

//! funções anonimas
//funções anonimas

const dobroDoNumero = function (numero) {
  return numero * 2;
};
const dobro = dobroDoNumero(2);
console.log(dobro);

//arrow function -> Funçãos seta
/**escopo
() => {

}
*/

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};
const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploDoNumero = (numero) => numero * 3;

//Objeto (Object literal)
//* criação de objeto
//! objeto usa chave o conteudo fica dentro da chave

const pessoa = {
  nome: "luiz",
  idade: 30,
  altura: 1.7,
  programador: true,
  hobbye: ["estudar", "jogar", "treinar"],
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa[hobbye]);

pessoa.profissão = "Dev";
console.log(pessoa);

delete pessoa.altura;
console.log(pessoa);
console.clear();

ou;

const idade = 32;
const altura = 1.8;

const objeto = {
  idade,
  altura,
};
console.log(objeto);
