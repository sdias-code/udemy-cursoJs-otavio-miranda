function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(()=>{            
            resolve(msg.toUpperCase() + ' - Passei na Promise');
        }, tempo);
    });
  
}

function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000)
];

Promise.all(promises)
.then(response => console.log(response))
.catch(error => console.log(error));