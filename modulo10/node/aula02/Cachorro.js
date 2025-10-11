module.exports = class Cachorro{
    constructor(nome){
        this.nome = nome;
    }

    latir = () => this.nome + ' ' + 'está latindo';
}