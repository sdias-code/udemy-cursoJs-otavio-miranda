const fs = require('fs').promises;

module.exports = async (caminho) => {
  const dados = await fs.readFile(caminho, 'utf-8');
  return JSON.parse(dados);
}
