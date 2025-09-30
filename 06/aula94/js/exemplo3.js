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

const caneca = {
    nome: 'Caneca',
    preco: 25
};

console.log(caneca);

Object.setPrototypeOf(caneca, Produto.prototype);


caneca.aumento(100);
console.log(caneca);