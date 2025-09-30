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

const camisa = new Produto('Camiseta', 50);

camisa.desconto(20);
console.log(camisa);

camisa.aumento(100);
console.log(camisa);