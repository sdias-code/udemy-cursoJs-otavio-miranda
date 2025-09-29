function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 4;
    yield 5;
}

const geradora = geradora4();

for(let valor of geradora) {
    console.log(valor);
}