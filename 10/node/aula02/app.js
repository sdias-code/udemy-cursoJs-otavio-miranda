const multiplicacao = require('./multiplicacao');
const soma = require('./soma');

const Cachorro = require('./Cachorro');

console.log(multiplicacao(2, 3));

console.log(soma(5,3));

const dog = new Cachorro('Rex');

console.log(dog.latir());