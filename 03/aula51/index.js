
const aluno ={
    nome: "João",
    sobrenome: "Silva",
    idade: 20,
    endereco:{
        rua: "Rua A",
        numero: 1000,
        cidade: "São Paulo"
    }
}   


const {nome, sobrenome, idade} = aluno;

console.log(nome);
console.log(sobrenome);
console.log(idade);

const {endereco:{rua, numero}} = aluno;
console.log(rua);
console.log(numero);