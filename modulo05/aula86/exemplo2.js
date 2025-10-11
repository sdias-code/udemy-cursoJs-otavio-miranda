
const pessoas = [
    {nome: 'Silvio', idade: 49},
    {nome: 'Maria', idade: 25},
    {nome: 'Anderson', idade: 55},
    {nome: 'Fabiana', idade: 15}
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor, indice) => {
    console.log('acumulador:', acumulador, 'valor:',valor);
    
    if(acumulador.idade > valor.idade)
    return acumulador;

    return valor;

});

console.log(pessoaMaisVelha);