// Composição - Mixins

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

const pessoaPrototype = Object.assign({}, falar, beber, comer);

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

console.log(p1);
console.log(p2);
