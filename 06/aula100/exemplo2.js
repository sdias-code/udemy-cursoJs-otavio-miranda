const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const pessoaPrototype = {...falar, ...beber, ...comer};

function criarPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    });
}

const p1 = criarPessoa('Silvio', 'Dias');
const p2 = criarPessoa('Fabio', 'Souza');

p1.falar();
p2.falar();