// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    })
}

const p1 = new Produto('Camisa', 20, 5);
console.log(p1);
console.log(Object.keys(p1));