const pessoa = new Object();
pessoa.nome = 'Silvio';
pessoa.sobrenome = 'Dias Ferreira';

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

delete pessoa.sobrenome;

console.log(pessoa);