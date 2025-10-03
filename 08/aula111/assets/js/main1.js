const request = obj => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);
        xhr.send(); // caso envio seja post
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });

    });


}

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }

});

function carregaPagina(el) {

    const href = el.getAttribute('href');

    console.log(href);

    request({
        method: 'GET',
        url: href        

    })
    .then(response =>{
        carregarResultado(response);
    })
    .catch(error =>{
        console.log(error);
    });
    
}

function carregarResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}