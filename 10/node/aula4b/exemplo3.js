const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'arquivo.txt');

console.log('Iniciando a leitura do arquivo...');

async function lerArquivo() { 
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('Conteúdo do arquivo (async/await):', data);
    } catch (err) {
        console.error('Erro ao ler o arquivo (async/await):', err);
    } 
    
}

lerArquivo();