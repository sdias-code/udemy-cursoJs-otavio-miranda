
//let info = document.querySelector('#info');
let texto = document.getElementById('texto');

const numeroDigitado = Number(prompt('Digite um número: '));

texto.innerHTML += `O seu número é: ${numeroDigitado} <br> `;
texto.innerHTML += `Raiz quadrada é: ${numeroDigitado ** 0.5} <br> `;
texto.innerHTML += `${numeroDigitado} é inteiro: ${Number.isInteger(numeroDigitado)} <br> `;
texto.innerHTML += `É NaN: ${Number.isNaN(numeroDigitado)} <br> `;
texto.innerHTML += `Arredondado para baixo: ${ Math.floor(numeroDigitado)} <br> `;
texto.innerHTML += `Arredondado para cima: ${ Math.ceil(numeroDigitado)} <br> `;
texto.innerHTML += `Com duas casas decimais: ${ numeroDigitado.toFixed(2)} <br> `;

