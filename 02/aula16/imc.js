
const nome = 'Silvio';
const sobrenome = 'Dias Ferreira';
const peso = 78;
const altura = 1.88;
let anoNascimento = 1976;
const anoAtual = 2025;

const idade = anoAtual - anoNascimento; // 2025 - 1976

let imc = peso / (altura * altura); // peso / (altura * altura)

console.log(nome, sobrenome, 'tem', altura, 'de altura, pesa', peso, 'quilos e seu IMC é de', imc.toFixed(2));

console.log(`${nome} ${sobrenome} tem ${altura} de altura, pesa ${peso} quilos e seu IMC é de ${imc.toFixed(2)}`);

console.log('Idade atual:', idade);