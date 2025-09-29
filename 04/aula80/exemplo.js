
// Função geradora
// Lazy valuation

function* geradora1(){
    yield ' Valor 1';
    yield ' Valor 2';
    yield ' Valor 3';
    yield ' Valor 4';
    yield ' Valor 5';
}

const g1 = geradora1();
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

for(let valor of g1){
    console.log(valor);
}

