class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

}

//this.Pessoa = Pessoa;
//console.log(this);

const nome = 'Fabio';
const sobrenome = 'de Souza Melo';

// sobrescrevendo o método exports

module.exports = {
    nome, sobrenome, Pessoa
};
