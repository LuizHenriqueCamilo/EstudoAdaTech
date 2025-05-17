// aula 19 - Poo
//Object Literal
// O que é um objeto literal?: É uma forma de criar um objeto em JavaScript sem usar a palavra-chave "new" ou uma função construtora. É uma maneira simples e direta de definir um objeto unico com suas propriedades e métodos.
var pessoa = {
    nome: "Lucas",
    idade: 25,
    altura: 1.75,
};
//* const pessoa2 = {
//*   nome: "Ana",
//*   idade: 30,
//* }
//sempre que ouver um obejto que se repete, podemos criar uma classe para representar esse objeto.
// Esta classe é uma abstração "classe: Pessso".
// Definindo a abstração de uma pessoa.
var Pessoa = /** @class */ (function () {
    //metodos
    // Método contrutor: É um método especial que é chamado quando um objeto é criado a partir de uma classe. Ele é usado para inicializar os atributos do objeto.
    function Pessoa(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    // Métodos são funções que pertencem a um objeto. Eles podem ser usados para realizar ações ou manipular os dados do objeto.
    Pessoa.prototype.dormir = function () {
        console.log("está dormindo. zzzzzzzZZZ");
    };
    return Pessoa;
}());
// Criando um objeto a partir da classe Pessoa
var pessoa1 = new Pessoa("Lucas", 25, 1.75);
var pessoa2 = new Pessoa("Ana", 30, 1.65);
function constructor(nome, idade, altura) {
    return new Pessoa(nome, idade, altura);
}
