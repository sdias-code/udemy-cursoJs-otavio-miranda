function mostrarHora() {
    let data = new Date();  
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoIntervalo() {
//     console.log(mostrarHora());
// }

// setInterval(funcaoDoIntervalo, 1000);

// setInterval(() => {
//     console.log(mostrarHora());
// }, 1000);

const timer = setInterval(() => {
    console.log(mostrarHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 5000); // para o setInterval depois de 5 segundos