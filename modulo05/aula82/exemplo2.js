
// nomes.splice(indice, delete, elem1, elem2, elem3);
const alunos = ['Mauricio', 'Fabio', 'Fernando', 'Marcos'];
console.log(alunos);

// removendo primeiro elemento:
const removidos = alunos.splice(0, 1); 

// retorna um array com elemento removido
console.log(removidos); 

console.log(alunos);