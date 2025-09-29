
const pessoas = [
    {nome: 'Silvio', idade: 49},
    {nome: 'Maria', idade: 25},
    {nome: 'Anderson', idade: 55},
    {nome: 'Fabiana', idade: 15}
]

const nomesPessoas = pessoas.map(p => p.nome);
console.log(pessoas);
console.log(nomesPessoas);

const retornaIdade = pessoas.map(p => ({idade: p.idade}));
console.log(retornaIdade);

/*
const gerarId = pessoas.map((obj, indice) =>{
    obj.id = indice; //altera o objeto original
    return obj;
});
*/

const gerarIdNovoObjetoCopia = pessoas.map((p, i) => {
    const newObj = {...p};
    newObj.id = i;
    return newObj;
})

console.log(gerarIdNovoObjetoCopia);
console.log(pessoas);
