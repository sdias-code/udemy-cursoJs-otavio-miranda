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

const promises = [
    esperaAi(500, rand(1,3)),
    esperaAi('Promise 1', rand(1,3)),
    esperaAi('Promise 2', rand(1,3)),
    esperaAi('Promise 3', rand(1,3)),

];

Promise.race(promises)
    .then(response => console.log(response))
    .catch(error => console.log(error));