const numeros = [1,2,3,4,5]

const somaNumeros = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(numeros);
console.log('Total:', somaNumeros);