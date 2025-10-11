const numeros = [25, 1, 2, 10,3, 4, 5, 6];

const numerosPares = numeros.filter(valor => valor % 2 === 0 );
const dobraValor = numerosPares.map(valor => valor * 2);
const maiorValor = dobraValor.reduce((acc, valor) => {
    if(valor > acc) 
        acc = valor; 
    return acc;
}, 0);

const filterMapReduce = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);
console.log(dobraValor);
console.log(maiorValor);
console.log(filterMapReduce);

