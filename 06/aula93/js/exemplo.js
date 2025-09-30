// Prototypes

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    // this.nomeCompleto = function(){
    //     return `${this.nome} ${this.sobrenome}`;
    // }
}

Pessoa.prototype.nomeCompleto = function(){    
    return `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.olaMundo = 'Olá mundo';

const p1 = new Pessoa('Silvio', 'Dias Ferreira');
const p2 = new Pessoa('Marcos', 'Dias');

console.dir(p1);
console.dir(p2);

const data = new Date();
console.dir(data);