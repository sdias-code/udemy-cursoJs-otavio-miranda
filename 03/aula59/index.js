const numeros = [100, 200, 300, 400, 500, 600];

for(let numero of numeros) {

    if(numero === 400) {
        continue;
    }
    console.log(numero);
}

console.log('----------------------------------');

for(let numero of numeros) {

    if(numero === 400) {
        break;
    }
    console.log(numero);
}
