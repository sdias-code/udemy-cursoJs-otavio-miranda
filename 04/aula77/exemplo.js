
// Funcao construtora
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => {
        return `Nome completo: ${nome} ${sobrenome}`;
    }
}

const p1 = new Pessoa('Silvio', 'Dias');
const p2 = new Pessoa('Fábio', 'Júnior');

console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);
console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());