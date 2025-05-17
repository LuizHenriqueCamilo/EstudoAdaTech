//Funções de alta ordem "Funções que recebem ou retorna função como parametro"
//* 1. função que retorna outra função como parametro

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja bem-vindo(o) ao curso de ${courseName}!`
    );
  };
}
const displayWelcomeToFrontEndCouse = welcome("Front-end em React");
displayWelcomeToFrontEndCouse("Luiz");
console.clear();

//* 2. função que recebe outra função como parametro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;
//opecao: função que realixa a operação entre os dois numeros
//           ou seja, ela precisa ser uma função que receba dois numeros
const calcular = (num1, num2, funcaodaOperacao) => funcaodaOperacao(num1, num2);

const retorno = calcular(10, 5, multiplicar);
console.log(retorno);

//! Exemplo de funções de alta odem de arrays
//* forEach()
//* Array.prototype.forEach()
const numeros = [40, 34, 67, 89, 23, 10];

function imprimirElemento(elemento) {
  console.log(elemento);
}
numeros.forEach(imprimirElemento);

//ou
// forEach aceita ate 3 parametros

numeros.forEach((item, index, arrayCompleto) => {
  console.log(item, index, arrayCompleto);
});
console.clear();

//* find()
//* Array.prototype.find: util para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero > 50;
});
console.log(encontrado);
console.log();

const pessoa = [
  {
    nome: "pessoa 1",
    idade: 34,
    altura: 1.77,
  },
  {
    nome: "pessoa 2",
    idade: 25,
    altura: 1.56,
  },
  {
    nome: "pessoa 3",
    idade: 46,
    altura: 1.82,
  },
];

const pessoaEncontrada = pessoa.find((pessoa) => pessoa.idade > 40);
console.clear();
console.log(pessoaEncontrada);

//* findIndex()
//* Array.prototype.findIndex : parecido com i find porem retorna o indice do elemento

const indiceDaPessoaEncontrada = pessoa.findIndex(
  (pessoa) => pessoa.idade > 40
);
console.clear();
console.log(indiceDaPessoaEncontrada);


