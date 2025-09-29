function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa('Silvio', 'Dias Ferreira');
console.log(p1);

Object.defineProperty(p1, 'nome',{
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(p1, 'nome'));

/* 
value: 'Silvio',
writable: false,
enumerable: true,
configurable: true
*/

p1.nome = 'João';
p1.sobrenome = 'Santos';

console.log(p1);
console.log(Object.keys(p1));
console.log(Object.values(p1));
console.log(Object.entries(p1));





