const nomes = ['Marcos', 'Tiago', 'Silvio', 'Fabio'];
console.log('Array original');
console.log(nomes);
console.log();

const novo = [...nomes];
console.log('Cópia do array original:');
console.log(novo);
console.log('Removendo último elemento do array:');
novo.pop();
console.log(novo);
console.log();

const novaReferencia = nomes;
console.log('Criando novo array tendo como referencia o array original:');
console.log(novaReferencia);
console.log('Removendo primeiro elemento do array:');
novaReferencia.shift();
console.log(novaReferencia);
console.log();

console.log('Array original, sofreu alteração também:');
console.log(nomes);
console.log()

console.log('Array copiado:')
console.log(novo);
console.log('Adicionando item no array');
novo.push('Marta');
console.log(novo);



