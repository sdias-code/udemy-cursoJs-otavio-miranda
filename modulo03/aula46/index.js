//const quatroHoras = 4 * 60 * 60 * 1000;
//const umDia = 24 * 60 * 60 * 1000;
// const data = new Date(2024, 3, 20, 15, 14, 27, 500); // Ano, Mês (0-11), Dia, Hora, Minuto, Segundo, Milissegundo
// const data = new Date('2024-04-20 15:14:27.500'); // Formato ISO 8601
//let data = new Date(0 + quatroHoras); // 01/01/1970 Timestamp unix ou época unix
//let data = new Date(0 + quatroHoras + umDia);  // 02/01/1970
let data = new Date();  // data atual
console.log(data);

const dia = data.getDate();
const mes = data.getMonth() + 1; // Mês começa do zero
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const seg = data.getSeconds();
const mseg = data.getMilliseconds();
const diaSemana = data.getDay(); // 0 - Domingo, 6 - Sábado

//console.log(data.toString());
//console.log(dia, mes, ano, hora, min, seg, mseg);

// obter data com milesimos de segundos
//console.log(Date.now());
//console.log(new Date(1758655470750));

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
console.log(formataData(data));



