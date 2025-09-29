let a = [1, 2, 3, 4, 5];

let b = a;
let c = [...a]; // Spread operator, cria uma cópia do array

console.log(a);
console.log(b);
console.log(c);

a.push(6);
a.push(9);
a.push(7);

console.log(a);
console.log(b);
console.log(c);

b.pop();

console.log(a);
console.log(b);
console.log(c);

const aluno = {
    nome: 'Silvio',
    sobrenome: 'Dias Ferreira'};

const aluno2 = { ...aluno }; // Spread operator, cria uma cópia do objeto
aluno2.nome = 'Ana';


console.log(aluno);
console.log(aluno2);