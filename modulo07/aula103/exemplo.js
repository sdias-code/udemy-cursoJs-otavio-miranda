class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return `${this.nome} está falando.`;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(nome) {
        const arrayNome = nome.split(' ');    
        this.nome = arrayNome.shift();
        this.sobrenome = arrayNome.join(' ');
    }

}

const p1 = new Pessoa('Antonio', 'Queiroz');
console.log(p1);

console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Adrey de Souza Melo';
console.log(p1.nome);
console.log(p1.sobrenome);
