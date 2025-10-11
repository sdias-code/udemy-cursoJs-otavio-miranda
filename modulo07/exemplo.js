class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

}

const p1 = new Pessoa('Silvio', 'Dias');
const p2 = new Pessoa('Anderson', 'Souza');

console.log(p1);
console.log(p2);

