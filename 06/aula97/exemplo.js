
//validação de CPF

/*
Resumo do algoritmo

Normalizar: remover tudo que não for dígito (pontos, traços, espaço). O CPF válido tem 11 dígitos.

Rejeitar sequências óbvias: se todos os dígitos são iguais (ex.: 00000000000, 11111111111, ...), é inválido.

Calcular o 1º dígito verificador:

Pegue os 9 primeiros dígitos.

Multiplique cada um pelos pesos 10,9,8,7,6,5,4,3,2 respectivamente.

Some os resultados.

Calcule resto = soma % 11.

Se resto < 2, o primeiro dígito verificador = 0. Caso contrário, = 11 - resto.

Calcular o 2º dígito verificador:

Agora pegue os 9 dígitos originais + o 1º dígito calculado (total 10 dígitos).

Multiplique pelos pesos 11,10,9,8,7,6,5,4,3,2.

Some, calcule resto = soma % 11.

Se resto < 2, o segundo dígito = 0. Senão, 11 - resto.

Comparar: verifique se os dois dígitos calculados coincidem com os dois últimos dígitos do CPF informado. Se coincidem, CPF válido; caso contrário, inválido.

Exemplo numérico (passo a passo)

CPF hipotético: 705.484.450-52 → dígitos: 7 0 5 4 8 4 4 5 0 5 2

Calcular 1º dígito usando os 9 primeiros: 7 0 5 4 8 4 4 5 0
Pesos: 10 9 8 7 6 5 4 3 2

Multiplicações:

7×10 = 70

0×9 = 0

5×8 = 40

4×7 = 28

8×6 = 48

4×5 = 20

4×4 = 16

5×3 = 15

0×2 = 0

Soma = 70+0+40+28+48+20+16+15+0 = 237
Resto = 237 % 11 = 6 → como resto ≥ 2, 1º dígito = 11 - 6 = 5 (coincide com o 10º dígito do CPF: 5).

Agora 2º dígito com 10 dígitos: 7 0 5 4 8 4 4 5 0 5
Pesos: 11 10 9 8 7 6 5 4 3 2

Multiplicações (resumo):

7×11 = 77

0×10 = 0

5×9 = 45

4×8 = 32

8×7 = 56

4×6 = 24

4×5 = 20

5×4 = 20

0×3 = 0

5×2 = 10

Soma = 77+0+45+32+56+24+20+20+0+10 = 284
Resto = 284 % 11 = 9 → 2º dígito = 11 - 9 = 2 (coincide com o 11º dígito: 2).

exemplo: 705.484.450-52
*/

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


