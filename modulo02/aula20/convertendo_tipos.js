
// Convertendo tipos string para number, usando parseInt(), parseFloat() e Number()

const num1 = 10; // number
const num2 = '5.2'; // string

let soma = num1 + parseInt(num2); // converte string para inteiro, sem casas decimais
console.log(soma);
console.log(typeof soma);

let soma2 = num1 + parseFloat(num2); // converte string para ponto flutuante, com casas decimais
console.log(soma2);
console.log(typeof soma2);

let soma3 = num1 + Number(num2); // converte string para number, com ou sem casas decimais
console.log(soma3);
console.log(typeof soma3);
