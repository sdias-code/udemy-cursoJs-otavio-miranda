// const frutas = ['Pera', 'Maçã', 'Uva', 'Banana', 'Abacaxi'];

// for (let i in frutas) {

//     console.log(`Indice ${i}: ${frutas[i]}`);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {

    console.log(`${chave}: ${pessoa[chave]}`);
}