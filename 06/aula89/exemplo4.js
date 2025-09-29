// Constructor functions

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa('Silvio', 'Dias Ferreira');
const p2 = new Pessoa('Maria', 'das Graças');

console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());

Object.freeze(p2);
delete p2.sobrenome; // undefined se não bloqueado usando freeze
console.log(p2.nome, p2.sobrenome);