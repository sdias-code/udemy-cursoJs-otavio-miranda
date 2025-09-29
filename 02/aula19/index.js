// dados primitivos (imutáveis) - string, number, boolean, undefined, null, symbol, bigint
// dados por referência (mutáveis) - object (array, object, function)

// tipos primitivos - string
const nome = 'Silvio';
const nom1 = "Silvio";
const nom2 = `Silvio`;
console.log(nome, nom1, nom2);
console.log(typeof nome, typeof nom1, typeof nom2);

// tipos primitivos - number
const num1 = 10; // inteiro (int)
const num2 = 10.52; // ponto flutuante (float)
console.log(num1, num2);
console.log(typeof num1, typeof num2);

// tipos primitivos - boolean - true ou false
const boo1 = true;
const boo2 = false;
console.log(boo1, boo2);
console.log(typeof boo1, typeof boo2);

// tipos primitivos - undefined - indefinido
let var1;
console.log(var1);
console.log(typeof var1);
var1 = 'Agora tem um valor';
console.log(var1);
console.log(typeof var1);   

// tipos primitivos - null - nulo
let var2 = null;
console.log(var2);
console.log(typeof var2); // erro do JS, deveria ser null   

// tipos primitivos - symbol (símbolo) - valor único
const simb1 = Symbol('1');
const simb2 = Symbol('1');  
console.log(simb1, simb2);
console.log(typeof simb1, typeof simb2);
console.log(simb1 === simb2); // false, são diferentes

// tipos primitivos - bigint - números maiores que 2^53
const num3 = 1234567890123456789012345678901234567890n;
console.log(num3);
console.log(typeof num3);

// tipos primitivos - object (objeto) - coleção de dados
const obj1 = { nome: 'Silvio', sobrenome: 'Ferreira' };
console.log(obj1);
console.log(typeof obj1);
console.log(obj1.nome, obj1.sobrenome);

// tipos primitivos - function (função) - bloco de código
const func1 = function() { return 'Olá'; };
console.log(func1);
console.log(typeof func1);
console.log(func1());


let a = 2;
let b = a; // cópia
console.log(a, b);
a = 3;
console.log(a, b); // b não muda
// b é uma cópia de a, não uma referência
