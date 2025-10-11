const fs = require('fs'); //método sincrono - sem promises
const path = require('path');

const filePath = path.join(__dirname, 'arquivo.txt');

console.log('Iniciando a leitura do arquivo...');

// método sincrono

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    };

    console.log('Conteúdo do arquivo:', data);

});