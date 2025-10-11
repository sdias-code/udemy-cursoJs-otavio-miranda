// Aula 29 - Arrays em JavaScript

const nomes = ['João', 'Maria', 'Pedro', 'Ana'];
console.log(nomes);

nomes[0] = 'Carlos'; // Alterando o primeiro elemento
console.log(nomes);

nomes.push('Luiza'); // Adicionando um novo elemento no final
console.log(nomes);

nomes.pop(); // Removendo o último elemento
console.log(nomes);

nomes.shift(); // Removendo o primeiro elemento
console.log(nomes);

nomes.unshift('Marcos'); // Adicionando um novo elemento no início
console.log(nomes);

nomes.push('Fernanda', 'Rafael'); // Adicionando múltiplos elementos
console.log(nomes);

console.log(nomes.slice(0, 2)); // Fatiando o array

console.log(typeof nomes); // Verificando o tipo
console.log(Array.isArray(nomes)); // Verificando se é um array