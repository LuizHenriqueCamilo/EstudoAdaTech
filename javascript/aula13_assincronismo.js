//aões assincromas
// 1. callbacks (função retorno ou chamada de retorno)
// 2. promises (promessa)
// 3. resolvendo promises async/await

// Exemplo de callback
const fs = require("fs");
console.log();
//função de ler arquivo "biblioteca ndo proprio node"
fs.readFile("javascript/assincronismo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("erro", erro);
  } else {
    console.log(String(conteudoDoArquivo));
  }
});
console.clear();

//? exemplo 2: settimeout

console.log("antes da execução");
setTimeout(() => {
  console.log("executado apos 2 segundo ");
}, 2 * 100);
console.log("depois da execução");
console.log(clear);

