// CALLBACK (método tradicional)
// Executa uma função depois que algo termina, passando um callback.

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'arquivo.txt');

function lerArquivoCallback() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler (callback):', err);
      return;
    }
    console.log('Conteúdo (callback):', data);
  });
}

lerArquivoCallback();
