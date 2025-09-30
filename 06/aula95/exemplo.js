
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;

}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor; 
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 50, 'vidro', 100);
caneca.aumento(10);
console.log(caneca);

const camiseta = new Camiseta('Regata', 7.5, 'Azul');
camiseta.aumento(100);
console.log(camiseta);

const sabonete = new Produto('Sabonete', 35);
console.log(sabonete);

