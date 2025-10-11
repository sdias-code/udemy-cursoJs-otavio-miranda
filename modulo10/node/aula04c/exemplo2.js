// PROMISES (.then / .catch)
// O fs.promises retorna uma Promise, que representa algo que vai acontecer no futuro.

const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, 'arquivo.txt');

function lerArquivoPromise() {
  fs.readFile(filePath, 'utf8')
    .then((data) => {
      console.log('Conteúdo (Promise):');
      console.log(data);
    })
    .catch((err) => {
      console.error('Erro ao ler (Promise):', err);
    });
}

lerArquivoPromise();
