const fs = require('fs').promises;

async function escreverArquivo(dados, caminhoArquivo) {
  try {
    // Lê o conteúdo atual, se existir
    let conteudo = [];
    try {
      const data = await fs.readFile(caminhoArquivo, 'utf8');
      conteudo = JSON.parse(data);
    } catch {} // ignora erro caso o arquivo ainda não exista

    // Adiciona o novo dado
    conteudo.push(dados);

    // Reescreve o arquivo com o array atualizado
    await fs.writeFile(caminhoArquivo, JSON.stringify(conteudo, null, 2));
  } catch (err) {
    console.error('Erro ao escrever o arquivo:', err);
  }
}

module.exports = escreverArquivo;



