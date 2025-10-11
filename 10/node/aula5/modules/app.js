const escrever = require('./escrever');
const path = require('path');

const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};

const caminhoArquivo = path.resolve(__dirname, 'teste.json');

escrever(pessoa, caminhoArquivo);