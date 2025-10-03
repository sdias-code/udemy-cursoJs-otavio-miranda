function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Ocorreu um erro');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na Promise');
        }, tempo);
    });

}

function rand() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1) * 1000;
}

// esperaAi('Fase 1', rand(1, 3))
//     .then(response => {
//         console.log(response);
//         return esperaAi('Fase 2', rand(1, 3));
//     })
//     .then(response => {
//         console.log(response);
//         return esperaAi('Fase 3', rand(1, 3));
//     })
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

async function executa() {
    try {
        const fase1 = await esperaAi('Fase1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase2', rand());
        console.log(fase2);

        const fase3 = await esperaAi(333, rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (error) {
        console.log(error);
    }

};

executa();