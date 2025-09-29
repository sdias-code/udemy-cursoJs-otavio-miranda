// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque,
        //writable: true,
        configurable: false,
        get: function(){ // [Getter]
            return estoque;
        },
        set: function(valor){ // [Setter]
            if(typeof valor !== 'number') return console.log('Valor atribuído para estoque inválido');
            estoque = valor;
        }
    })
}

const p1 = new Produto('Camisa', 20, 5);
console.log(p1);
console.log(p1.estoque);

p1.estoque = 'alguma coisa';
p1.estoque = 65;

console.log(p1.estoque);
