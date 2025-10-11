// Factory function

function criarPessoa(nome, sobrenome){
   return {
    nome,
    sobrenome,
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
   }
}

const p1 = criarPessoa('Silvio', 'Dias Ferreira');
console.log(p1.nomeCompleto);