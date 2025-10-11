function relogio() {
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');

    let segundos = 0;
    let timer;

    document.addEventListener('click', function (event) {
        const el = event.target;
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            timer = setInterval(function () {
                segundos++;
                relogio.innerHTML = getTimeFromSeconds(segundos);
            }, 1000);
        }
    });

    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    relogio.innerHTML = '00:00:00';

    /*
    iniciar.addEventListener('click', function (event) {
        relogio.classList.remove('pausado');
    
      clearInterval(timer);
      timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
      }, 1000);
    });
    
    pausar.addEventListener('click', function (event) {
      clearInterval(timer);
        relogio.classList.add('pausado');
    }); 
    
    zerar.addEventListener('click', function (event) {
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = '00:00:00';
    });
    */
}

relogio();
