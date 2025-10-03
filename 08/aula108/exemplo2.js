
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(()=>{            
            resolve(msg);
        }, tempo);
    });
  
}

function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

esperaAi('Frase 1', rand(1,3))
.then( response =>{
    console.log('Primeira promise:', response);
    return esperaAi('Frase 2', rand(1,3));
})
.then(response => {
    console.log('Segunda promise:', response);
    return esperaAi(['amor', 'casa'], rand(1,3));
})
.then(response =>{
    console.log('Terceira promise:', response);
})
.catch(e =>{
    console.log('Erro:', e);
});



