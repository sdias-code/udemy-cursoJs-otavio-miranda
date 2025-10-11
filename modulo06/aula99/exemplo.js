
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this. conta = conta;
    this. saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Tentativa de saque: R$ ${valor.toFixed(2)} - saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
        
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
}

const conta1 = new Conta(1101, 2200, 50);
console.log(conta1);

conta1.depositar(5);
conta1.sacar(20);
conta1.sacar(200);