
const data = new Date();
console.log(data.toLocaleDateString('pt-BR')); // 23/09/2025
console.log(data.toLocaleDateString('pt-BR', {dateStyle: 'full'})); // terça-feira, 23 de setembro de 2025
console.log(data.toLocaleString('pt-BR')); // 23/09/2025, 16:36:22
console.log(data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})); // terça-feira, 23 de setembro de 2025 às 16:44

