function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na Promise');
        }, tempo);
    });

}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

function baixaPagina(){
    const emCache = false;
    if(emCache){
        return Promise.resolve('Página em cache');
    } else{
        return esperaAi('Baixei a página', rand(1,3));
    }
}


baixaPagina()
.then(resolve => console.log(resolve))
.catch(error => console.log(error));