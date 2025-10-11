const leitura = require('./ler');
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

leitura(caminhoArquivo)
  .then(dados => console.log(dados))
  .catch(err => console.error(err));
  