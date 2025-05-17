// estrutura de controle de fluxo
// Estrutura condicionada

const prompt = require("readline-sync");
const idade = Number(prompt.question("Qual é a sua idade? "));
const ehMaiorDeIdade = idade >= 18;

//Estrtura Condicional

//* escopo da condição si ou não if/else

//! if("condição a ser comprida, comparação"){
//! console.log("resutado da condição ou a comparação")
//! }else{
//! console.log("resultado da condição ou a comparação")
//! }

if (idade >= 18) {
  console.log("Voçê é maior de idade.");
} else {
  console.log("Voçê é meno de idade.");
}

//* explo 02

const mediaDoAluno = 6.99999;

// media >= 7 Aprovado
// media < 7 media >= 5, prova final
// media < 5, reprovado

if (mediaDoAluno >= 7) {
  console.log("Aprovado");
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}

//* test

const prompt = require("readline-sync");
const nota = Number(prompt.question("Qual é a sua nota? "));

if (nota >= 7) {
  console.log("Aprovado");
  console.log("Aprovado Parabens! :D ");
} else if (nota < 7 && nota >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}

//! condicionais switch/case
//*escopo
// switch(){
//  case:
// console.log()
//  Break
//  case:
// console.log()
//  Break
// }

const permisoes = "aluno";
switch (permisoes) {
  case "aluno":
    console.log("Voçê pode visualizar as aulas.");
    break;
  case "professor":
    console.log("Voçê pode alterar as aulas e adicionar exercicios.");
    break;
  case "adm":
    console.log("liberado");
    break;
  default:
    console.log("Não identificado");
    break;
}

//* Operador Ternario

const altura1 = 21;
altura1 = 18 ? console.log("maior de altura") : console.log("menor de altura");

//ou
const altura = 21;
const mensagem = altura >= 18 ? "maior de altura" : "menor de altura";
console.log(mensagem);
