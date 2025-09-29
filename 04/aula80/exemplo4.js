function* geradora1(){
    yield () => 'Vim do yield 1';    

    yield () => 'Vim do yield 2';

    yield () => 'Vim do yield 3';
}

const geradora = geradora1();

const fn1 = geradora.next();
const fn2 = geradora.next();
const fn3 = geradora.next();

console.log(fn1.value());
console.log(fn2.value());
console.log(fn3.value());