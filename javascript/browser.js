//Entrada de Dados no browser
// const idade = prompt("Qual é a sua idade");

//entrada de dados no node

console.clear();

const prompt = require("readline-sync");

const idade = prompt.question("Qual é a sua idade");

const idadeNumber = Number(idade);

//coeção esplicita ou conversão manual

console.log(idadeNumber, typeof idadeNumber);

console.log(Number("x"));

console.log(String(10));

console.log(Boolean(2));

// coeção implicita

console.log(1 + "1");
console.log(10 + "5");
console.log(10 - "5");
