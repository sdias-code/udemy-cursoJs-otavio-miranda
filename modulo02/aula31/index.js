
// funçoes em javascript

function saudacao(nome) {
    
    return `Bom dia ${nome}!`;
}

saudacao('Luiz');
saudacao('Maria');


const valorFuncao = saudacao('João');
console.log(valorFuncao); // Bom dia João!

const raiz = function(n) {
    return n ** 0.5;
}

console.log(raiz(9)); // 3

const raiz2 = n => n ** 0.5; // arrow function
console.log(raiz2(16)); // 4