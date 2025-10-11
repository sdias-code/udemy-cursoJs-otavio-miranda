const fs = require('fs').promises;
const path = require('path');

console.log('Iniciando a leitura do arquivo...');
console.log(__dirname);
console.log(__filename);

const arquivoPath = path.join(__dirname, 'arquivo.txt');
console.log('Caminho completo do arquivo:', arquivoPath);

function lerArquivo() {
  return fs.readFile(arquivoPath, 'utf8')
    .then((data) => {
      console.log('Conteúdo do arquivo lido com sucesso:');
      console.log(data);
      return data; // retorna o conteúdo
    })
    .catch((err) => {
      console.error('Erro ao ler o arquivo:', err);
      throw err; // propaga o erro
    });
}


lerArquivo()
.then(() => console.log('Leitura do arquivo concluída.'))
.catch(() => console.log('Falha na leitura do arquivo.'));
