
function esperaAi(msg, tempo){
    setTimeout(() =>{
        console.log(msg);
    }, tempo);
}

function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

esperaAi('Frase 1', rand(1,3));
esperaAi('Frase 2', rand(1,3));
esperaAi('Frase 3', rand(1,3));