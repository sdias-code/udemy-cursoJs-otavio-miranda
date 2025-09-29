const numeros = [1,2,3,4,5];

//obs. usar filter, 
// objtivo do reduce é retornar um valor
const numerosPares = numeros.reduce((acumulador, valor) =>{
if(valor % 2 === 0) acumulador.push(valor);
return acumulador;
},[])

console.log(numeros);
console.log(numerosPares);