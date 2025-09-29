function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa('Silvio', 'Dias Ferreira');

//console.log(p1);
// console.log('Chaves:');
// console.log(Object.keys(p1));
// console.log();

// console.log('Valores:');
// console.log(Object.values(p1));
// console.log();


// console.log('chave: valor:');
// console.log(Object.entries(p1));

for(let [chave, valor] of Object.entries(p1)){
    console.log(`chave: ${chave}, valor: ${valor}`);
};





