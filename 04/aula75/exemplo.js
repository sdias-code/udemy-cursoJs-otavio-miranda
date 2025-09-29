// Factory function
/*
function criarPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}`;
        }, 
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}
    */

function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criarPessoa('Silvio', 'Dias', 1.90, 78);
const falando = p1.fala('estudando muito');

console.log(falando);
// console.log('imc:', p1.imc());
console.log('imc:', imc);