const fs = require("fs");
//lendo um arquivo JSON.
fs.readFile("json/aula-14.json", (erro, dados) => {
  if (erro) {
    console.log("erro", erro);
    console.log(typeof erro);
  } else {
    // parse transforma os dados em um obejto arquivo do JSON.
    const dadosDoObjeto = JSON.parse(dados);
    //acessando un dado do objeto
    console.log(dadosDoObjeto.a);
  }
});
console.clear;
//convertendo JSON, e, formato string em u objeto

const jsonString = '{"nome": "luiz"}';
console.log(JSON.parse(jsonString));
//convertendo um objeto do js, em Json(string)
const pessoa = {
  nome: "luiz",
  papel: "estudante",
};

console.log(JSON.stringify(pessoa));
