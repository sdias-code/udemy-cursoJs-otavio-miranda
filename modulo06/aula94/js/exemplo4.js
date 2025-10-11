function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const caneca = Object.create(Produto.prototype, {
    nome:{
        value: 'Caneca prateada',
        writable: true,
        enumerable: true,
        configurable: false
    },
    preco:{
        value: 55,
        writable: true,
        enumerable: true,
        configurable: true
    }
})
// caneca.nome = 'Caneca prateada'
// caneca.preco = 50;
console.log(caneca);
caneca.aumento(100);
console.log(caneca);