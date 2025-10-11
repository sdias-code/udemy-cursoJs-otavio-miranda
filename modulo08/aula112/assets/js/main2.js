
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

    fetch(href)
    .then(response => {        
        if(response.status !== 200)  throw new Error('Erro 404');        
        return response.text();
    })
    .then(response => {
                console.log(response);
        carregarResultado(response);
    })        
    .catch(e => console.log(e));    

}

function carregarResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}