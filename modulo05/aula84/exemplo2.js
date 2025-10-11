const pessoas = [
    {nome: 'Silvio', idade: 49},
    {nome: 'Maria', idade: 25},
    {nome: 'Anderson', idade: 55},
    {nome: 'Fabiana', idade: 15}
]

const pessoasMaiorQueSeisLetras = pessoas.filter(x => x.nome.length > 6);
console.log(pessoasMaiorQueSeisLetras);

const pessoMaiorQueCinquentaAnos = pessoas.filter(x => x.idade > 50);
console.log(pessoMaiorQueCinquentaAnos);

const pessoasComNomeIniciandoLetraA = pessoas.filter(x => x.nome.charAt(0) === 'F');
console.log(pessoasComNomeIniciandoLetraA);

const pessoasComNomesTerminandoComLetraO = pessoas.filter(x => x.nome.toLowerCase().endsWith('o'));
console.log(pessoasComNomesTerminandoComLetraO);