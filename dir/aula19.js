"use strict";
// aula 19 - Poo
//Object Literal
// O que é um objeto literal?: É uma forma de criar um objeto em JavaScript sem usar a palavra-chave "new" ou uma função construtora. É uma maneira simples e direta de definir um objeto unico com suas propriedades e métodos.
const pessoa = {
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
class Pessoa {
    //metodos
    // Método contrutor: É um método especial que é chamado quando um objeto é criado a partir de uma classe. Ele é usado para inicializar os atributos do objeto.
    constructor(nome, idade, altura) {
        this.nome = nome || ""; // Ensure 'nome' is initialized
        this.idade = idade;
        this.altura = altura;
    }
    // Métodos são funções que pertencem a um objeto. Eles podem ser usados para realizar ações ou manipular os dados do objeto.
    dormir() {
        console.log("está dormindo. zzzzzzzZZZ");
    }
}
// Criando um objeto a partir da classe Pessoa
const pessoa1 = new Pessoa("Lucas", 25, 1.75);
const pessoa2 = new Pessoa("Ana", 30, 1.65);
// Acessando os atributos e métodos do objeto
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.nome);
pessoa2.dormir(); // não percisa usa console.log, pois o método já tem um console.log dentro dele.
//* encapsulamento: cada classe deve conter todas informações nescessarias para o seu funcionamento, bem como todos métodos necessário para alterar essas informações, idelmente, apenas obektos da propria classe poderão akterar seus atributos, e obejtos de outras classes não irão interagir com eles através de métodos.
//* ou seja, não deve depender de outras classes. Isso é feito através do encapsulamento, que é o processo de esconder os detalhes internos de uma classe e expor apenas o que é necessário para o uso externo. O encapsulamento é alcançado através do uso de modificadores de acesso, como public, private e protected.
//defina na interface como sera a classe
// A classe Pessoa2 implementa a interface IPessoa, o que significa que ela deve ter as propriedades e métodos definidos na interface.
class Pessoa2 {
    dormir() {
        // método que implementa a interface IPessoa.
        console.log("está dormindo. zzzzzzzZZZ");
    }
    constructor(nome, idade, altura, cpf) {
        //2. readonly: É uma palavra-chave que indica que a propriedade é somente leitura. Isso significa que ela pode ser lida, mas não pode ser modificada após a inicialização. Isso é útil para proteger dados que não devem ser alterados depois de definidos.
        this.dataNascimento = new Date(); // atributo somente leitura, não pode ser alterado depois de inicializado. O modificador "readonly" indica que o atributo só pode ser lido, mas não pode ser modificado depois de inicializado.
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = "123.456.789-00"; // Updated to match the renamed property.
    }
    //3. accessors: get: acessor
    // São métodos especiais que permitem acessar ou modificar propriedades de um objeto de forma controlada. Eles são usados para encapsular o acesso a propriedades privadas ou protegidas, permitindo que você execute lógica adicional ao ler ou escrever valores. Por exemplo, você pode usar um accessor para validar um valor antes de atribuí-lo a uma propriedade.
    //get é um metodo que retorna o valor da propriedade, e set é um método que define o valor da propriedade. O get e set são usados para encapsular o acesso a propriedades privadas ou protegidas, permitindo que você execute lógica adicional ao ler ou escrever valores.
    get cpf() {
        return this._cpf; // Updated to match the renamed property.
    }
    //acessor set: set: acessor
    set cpf(newcpf) {
        if (newcpf.length !== 14) {
            //throw new Error("CPF inválido!"); // Lança um erro se o CPF não tiver 14 caracteres
            throw new Error("CPF inválido!");
            return;
        }
        this._cpf = newcpf; // Updated to match the renamed property.
    }
}
const pessoa3 = new Pessoa2("Lucas", 25, 1.75, "123.456.789-00");
const pessoa4 = new Pessoa2("Ana", 30, 1.65, "123.456.789-00");
console.log(pessoa3);
console.log(pessoa3.cpf); // Erro: cpf é privado e não pode ser acessado fora da classe
//apos usar o get, podemos acessar o cpf normalmente, pois o get permite acessar a propriedade privada como se fosse uma propriedade pública.
//! pessoa3.cpf = "123"; //apos usar o acessor : set, set podemos alterar o cpf normalmente, pois o set permite alterar a propriedade privada como se fosse uma propriedade pública.
console.log(pessoa4.cpf); // Erro: cpf é privado e não pode ser acessado fora da classe
pessoa4.cpf = "123.456.789-000"; // aqui foi definido uma regra que deve ser seguida, se não for seguido, o erro será lançado.
//if (newcpf.length !== 14) {
//throw new Error("CPF inválido!"); // Lança um erro se o CPF não tiver 14 caracteres
//      throw new Error("CPF inválido!");
//      return;
//    }
//* herança: É um conceito de programação orientada a objetos que permite que uma classe herde propriedades e métodos de outra classe. Isso significa que você pode criar uma nova classe com base em uma classe existente, reutilizando o código da classe pai e adicionando ou modificando funcionalidades na classe filha. A herança é uma maneira poderosa de organizar e estruturar o código, promovendo a reutilização e a extensibilidade.
// Se várias classes terão atrbutos e métodos em comum, não devemos ter que redigita-los várias vezes,Ao invés disso, criamos uma classe pai com esses atributos e métodos, e as classes filhas herdam esses atributos e métodos da classe pai com esses atributos comuns e as outras classes irão herdá-los.
class Professor extends Pessoa2 {
    // O construtor da classe filha deve chamar o construtor da classe pai usando a palavra-chave super(). Isso garante que os atributos da classe pai sejam inicializados corretamente.
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf); // Chama o construtor da classe pai (Pessoa)
        this.codigo = codigo; // Inicializa o atributo específico da classe filha (Professor)
    }
    // Método específico da classe Professor
    ensinar() {
        console.log("está ensinando.");
    }
}
//objeto professor1 é uma instância da classe Professor, que herda os atributos e métodos da classe Pessoa2.
const professor1 = new Professor("Lucas", 25, 1.75, "123.456.789-00", "PROF001");
console.log(professor1);
//metodo herdado da classe Pessoa2
professor1.dormir(); // Método herdado da classe Pessoa2
// Acessando o atributo específico da classe Professor
professor1.ensinar(); // Método específico da classe Professor
// Removed duplicate function implementation
function dormir() {
    console.log("está dormindo. zzzzzzzZZZ");
}
//*polimorfismo, O polimorfismo é um conceito de programação orientada a objetos que permite que diferentes classes implementem o mesmo método de maneiras diferentes. Isso significa que você pode ter várias classes que têm métodos com o mesmo nome, mas cada classe pode ter sua própria implementação desse método. Isso é útil quando você deseja que diferentes classes se comportem de maneira semelhante, mas com implementações específicas para cada classe.
// Princípios essencias na modelagem do paradigma de POO.
//3. Polimorfismo: Objeto de diferentes classes mãe podem ser tratados genereicamente como objetos pertenecentes a uma mesma classe mãe, ou seja, podemos ter um array de objetos de diferentes classes, desde que essas classes herdem de uma mesma classe mãe. Isso é útil quando você deseja que diferentes classes se comportem de maneira semelhante, mas com implementações específicas para cada classe.
// Isso é útil quando você deseja que diferentes classes se comportem de maneira semelhante, mas com implementações específicas para cada classe. Isso é útil quando você deseja que diferentes classes se comportem de maneira semelhante, mas com implementações específicas para cada classe.
console.log(pessoa1 instanceof Pessoa2); // true
console.log(pessoa2 instanceof Pessoa2); // true
console.log(pessoa3 instanceof Pessoa2); // true
console.log(pessoa4 instanceof Pessoa2); // true
console.log(professor1 instanceof Pessoa2); // true
console.log(professor1 instanceof Professor); // true
//instanceof: É um operador que verifica se um objeto é uma instância de uma determinada classe ou de uma classe pai. Ele retorna true se o objeto for uma instância da classe especificada ou de uma classe pai, e false caso contrário.
// como se ella estivesse perguntanto se elle pertence a classe Pessoa2 ou Professor.
