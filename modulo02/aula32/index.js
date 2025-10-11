const p1 = { nome: 'Silvio', sobrenome: 'Dias Ferreira', idade: 30 };

const p2 = { nome: 'Ana', sobrenome: 'Clara', idade: 25 };

function CriarPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = CriarPessoa('Silvio', 'Dias Ferreira', 30);
const pessoa2 = CriarPessoa('Ana', 'Clara', 25);

console.log(pessoa1);
console.log(pessoa2);

const p3 = {
    nome: 'Silvio',
    sobrenome: 'Dias Ferreira',
    idade: 30,
    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
}

p3.fala();
p3.incrementaIdade();
p3.fala();
p3.incrementaIdade();
p3.fala();
