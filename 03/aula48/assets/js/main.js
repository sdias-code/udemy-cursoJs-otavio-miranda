// const data = new Date();
// const texto = document.querySelector('#data');
// //texto.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' });
// texto.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

const data = new Date();
const texto = document.querySelector('#data');

const opcoesData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dataFormatada = data.toLocaleDateString('pt-BR', opcoesData);

const horas = data.getHours().toString().padStart(2, '0');
const minutos = data.getMinutes().toString().padStart(2, '0');

texto.innerHTML = `${dataFormatada} ${horas}:${minutos}`;