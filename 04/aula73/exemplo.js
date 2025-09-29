function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function f1(fn) {
    let numeroGerado = gerarNumeroAleatorio(1, 5) * 1000;
    console.log('Numero gerado: ', numeroGerado);
    setTimeout(() => {
        console.log('f1');
        if (fn) fn();
    }, numeroGerado);
}

function f2(fn) {
    let numeroGerado = gerarNumeroAleatorio(1, 5) * 1000;
    console.log('Numero gerado: ', numeroGerado);

    setTimeout(() => {
        console.log('f2');
        if (fn) fn();
    }, numeroGerado);
}

function f3(fn) {
    let numeroGerado = gerarNumeroAleatorio(1, 5) * 1000;
    console.log('Numero gerado: ', numeroGerado);
    setTimeout(() => {
        console.log('f3');
        if (fn) fn();
    }, numeroGerado);
}

/*
f1(function () {
    f2(function () {
        f3(function () {
            console.log('Olá mundo!');
        });
    })

});

*/
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
f3(f3Callback);
}

function f3Callback(){
    console.log('Olá mundo!');
}