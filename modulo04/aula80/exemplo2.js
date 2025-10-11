
function* contador(){
    let i = 0;

    while(i <= 100){
        yield i;
        i++;
    }
}

for(let valor of contador()){
    console.log(valor);
}