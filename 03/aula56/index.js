const frase = 'Um dia feliz com quem você ama é um dia perfeito!';

for(let i = 0; i < frase.length; i++) {
    console.log(frase[i]);
}

console.log('----------------------------------');

for(let i in frase) {
    console.log(frase[i]);
}

console.log('----------------------------------');

for(let i of frase) {
    console.log(i);
}

console.log('----------------------------------');

//arrays
const nomes = ['Fabio', 'Ana', 'Maria', 'João'];

nomes.forEach(function(element, index) {
    console.log(index, element);
});

console.log('----------------------------------');