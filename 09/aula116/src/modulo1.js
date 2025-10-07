const nome = 'Silvio';
const sobrenome = 'Dias Ferreira';
const idade = 49;

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

export default (x, y) => x + y;

export const multiplica = (x, y) => x * y;

export {nome, sobrenome, idade, nomeCompleto};