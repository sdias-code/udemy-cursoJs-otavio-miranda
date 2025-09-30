// Validar cpf

function calcularDigitos(n, numeros) {
    let soma = 0;
    let contador = 0;

    for (let i = n; i >= 2; i--) {
        soma += numeros[contador] * i;
        contador++;
    }

    let resto = soma % 11;
    let digito = 0;

    if (resto >= 2) digito = 11 - resto;

    return digito;
}

function validarCPf(cpf, digito1, digito2) { 

    if (digito1 === Number(cpf[9]) && digito2 === Number(cpf[10])) return 'CPF válido';    

    return 'CPF inválido';
}

const cpf = '705.484.450-52';

console.log('CPF informado:', cpf);

// 1 - remover caracteres especias, deixar apenas número
const normalizacaoCpf = cpf.replace(/\D/g, '');
console.log('CPF normalizado:',normalizacaoCpf);

// 2 - obter o primeiro dígito
const digitosObtidos1 = normalizacaoCpf.slice(0, -2);

const primeiroDigito = calcularDigitos(10, digitosObtidos1);

console.log('Primeiro dígito:', primeiroDigito);

// 3 - obter segundo dígito
const digitosObtidos2 = digitosObtidos1.concat(primeiroDigito);

const segundoDigito = calcularDigitos(11, digitosObtidos2);

console.log('Segundo dígito:', segundoDigito);

// 4 - validar cpf

const validaCpf = validarCPf(normalizacaoCpf, primeiroDigito, segundoDigito);

console.log(validaCpf);


