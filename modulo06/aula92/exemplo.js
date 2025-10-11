// Constructor functions

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa('Silvio', 'Dias Ferreira');
console.log(p1);

const copiaP1 = {...p1, idade: 90};
copiaP1.sobrenome = 'Santos';
console.log(copiaP1);

const p3 = Object.assign({}, p1, {endereco: 'Rua das flores n. 259'} );
p3.sobrenome = 'Caldas';
p3.idade = 65;
console.log(p3);

const p4 = {nome: p3.nome, idade: p3.idade}
console.log(p4);