// ASYNC / AWAIT (forma moderna e mais legível)
// É uma maneira mais limpa de usar Promises, parecendo código síncrono.
// Vantagem: mais simples, mais legível, e você pode usar await dentro de loops e condicionais.

const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, 'arquivo.txt');

async function lerArquivoAsync() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('Conteúdo (async/await):');
    console.log(data);
  } catch (err) {
    console.error('Erro ao ler (async/await):', err);
  }
}

lerArquivoAsync();
