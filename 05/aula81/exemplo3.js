
const nomes = ['Marcos', 'Tiago', 'Silvio', 'Fabio'];
console.log(nomes);
const ultimoNomeRemovido = nomes.slice(0,-1);
console.log('Ultimo elemento removido:');
console.log(ultimoNomeRemovido);

console.log();
nomes.push('Maria', 'André', 'João');
console.log(nomes);
console.log('Removendo o primeiro nome:');
const primeiroNomeRemovido = nomes.slice(1, nomes.length);
console.log(nomes);
console.log(primeiroNomeRemovido);

