function calcularDigito(n, numeros) {
    // Usando map e reduce para calcular a soma dos produtos
    const soma = numeros
        .map((num, i) => num * (n - i))
        .reduce((acc, val) => acc + val, 0);

    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) return 'CPF inválido';

    // Usando forEach para transformar string em array de números
    const numeros = [];
    cpfLimpo.split('').forEach(num => numeros.push(Number(num)));

    const digitosBase = numeros.slice(0, 9);
    const primeiroDigito = calcularDigito(10, digitosBase);

    const digitosBase2 = [...digitosBase, primeiroDigito];
    const segundoDigito = calcularDigito(11, digitosBase2);

    if (primeiroDigito === numeros[9] && segundoDigito === numeros[10]) {
        return 'CPF válido';
    }
    return 'CPF inválido';
}

const cpf = '705.484.450-52';
console.log('CPF informado:', cpf);
console.log(validarCPF(cpf));