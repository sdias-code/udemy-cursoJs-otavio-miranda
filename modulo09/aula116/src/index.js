import {nome as nome2, sobrenome, idade, nomeCompleto} from './modulo1';
import somaNumeros from './modulo1'; // importando funcao default
import { multiplica } from './modulo1';

const nome = 'João';

console.log(nome);

console.log(nomeCompleto(nome2, sobrenome));

console.log('Idade importada:', idade);

console.log('Soma 5 + 2:', somaNumeros(5,2));
console.log('Multiplica 5 * 2:', multiplica(5,2));