"use strict";
console.log("helow wold Aula 17 - 18");
// os obejetos abaixos são do tipo Person segue o padrão definido acima, com todos os atributos obrigatórios e o opcional.
const pessoa1 = {
    nome: "Lucas",
    idade: 20,
    altura: 1.8,
    peso: 70,
    empregado: true,
};
const pessoa2 = {
    nome: "Maria",
    idade: 25,
    altura: 1.65,
    peso: 60,
    empregado: false,
};
console.log(pessoa1, pessoa2);
const outraPessoa = {
    nome: "Lucas",
    idade: 20,
    altura: 1.8,
    Profisão: true,
};
const outraPessoa2 = {
    nome: "Maria",
    idade: 25,
    altura: 1.65,
    Profisão: false,
};
console.log(outraPessoa, outraPessoa2);
//a função chooseNumber recebe dois números e um critério, que pode ser "greater" ou "lower".
function chooseNumber(num1, num2, criterio2) {
    switch (criterio2) {
        case "greater":
            return num1 > num2 ? num1 : num2; //retorna o maior número
        case "lower":
            return num1 < num2 ? num1 : num2; //retorna o menor número
        default:
            const randomNumber = Math.random(); //retorna um número aleatório entre 0 e 1
            if (randomNumber < 0.5) {
                return num1; //retorna o primeiro número
                return num2; //retorna o segundo número
            }
    }
}
//função que retorna um número aleatório entre dois números
//a função recebe dois números como parâmetro e retorna um número aleatório entre eles.
const numeroescolhido = chooseNumber(10, 20, "lower"); // retorna um número aleatório entre 10 e 20
console.log("numero escolhido:", numeroescolhido); // retorna um número aleatório entre 10 e 20
//!obs: sempre que usa inferface, começe sentença com letra maiuscula "Person e Criterio".
function somar(number, number2) {
    return number + number2; //retorna a soma dos dois números
}
somar(10, 20); //retorna 30
const outraPessoaessoa = {
    nome: "Lucas",
    idade: 20,
}; //pode ter apenas alguns atributos, pois todos são opcional
const pessoas = {
    "Qualquer Coisa": {
        nome: "Lucas",
        idade: 20,
        altura: 1.8,
        peso: 70,
    },
    "Qualquer Coisa 2": {
        nome: "Maria",
        idade: 25,
        altura: 1.65,
        peso: 60,
    }
};
