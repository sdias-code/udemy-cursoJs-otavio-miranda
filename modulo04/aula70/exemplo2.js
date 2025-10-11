
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);
console.log(duplica(2));      // 4
console.log(triplica(2));   // 6
console.log(quadruplica(2)); // 8
