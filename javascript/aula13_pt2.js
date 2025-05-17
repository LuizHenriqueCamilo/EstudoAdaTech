//! Promeses
// estado das promeses
// Pending: pendende
// FullFiled: cocluida com sucesso
// Rejected: Rejeitada
const fs = require("fs");
function lerArquivo() {
  return new Promise((resolve, reject) => {
    fs.readFile("javascript/assincronismo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao ler o arquivo", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}
lerArquivo()
  .then((retornoDoResolveDaPromise) => {
    console;
    log("Deu Certo", retornoDoResolveDaPromise);
  })
  .catch((erro) => {
    console.log("Deus certo", erro);
  })
  .finaly(() => {
    console.log("excutado independet do resuldo sucesso ou fracasso");
  });

//ou

//* async/await

async function lerArquivo() {
  console.log("antes da promessa");

  try {
    const dadosDoArquivoLido = await lerArquivo();
    console.log(dadosDoArquivoLido);
    console.log("depois da promessa");
  } catch (erro) {
    console.log(erro);
    console.log("depois da premessa com erro");
  }
  finaly(() => {
    console.log("finaizado");
  });
}
lerArquivo();

fetch()
