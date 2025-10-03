
fetch('pagina4.html')
.then(resposta =>{
    if(resposta.status !== 200){
        throw new Error('Erro 404 interno');
    }
    return resposta.text();
})
.then(html => console.log(html))
.catch(error =>  console.error(error));
