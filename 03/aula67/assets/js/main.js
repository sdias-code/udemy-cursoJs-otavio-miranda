function escopoTarefas() {
    let tarefas = [];
    const inputTarefas = document.getElementById('tarefas');
    const btnAdicionar = document.getElementById('adicionar');
    const listaTarefas = document.getElementById('lista-tarefas');
    const btnLimpar = document.getElementById('limpar');



    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    function criarBtn() {
       return document.createElement('button');
    }

    inputTarefas.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const tarefa = inputTarefas.value;
            if (tarefa !== '') {
                tarefas.push(tarefa);
                inputTarefas.value = '';
                criaTarefas();
                salvarTarefas();
            }
        }
    });

    btnAdicionar.addEventListener('click', function () {
        const tarefa = inputTarefas.value;       

        if (tarefa !== '') {
            tarefas.push(tarefa);
            inputTarefas.value = '';
            criaTarefas();
            salvarTarefas();
        }
    });

    function criaTarefas() {
        listaTarefas.innerHTML = '';  

        for (let i = 0; i < tarefas.length; i++) {            
            const li = criaLi();
            li.innerText = tarefas[i];            
            const btnRemover = criarBtn();
            btnRemover.innerText = 'Remover';
            btnRemover.style.marginLeft = '10px';
            btnRemover.addEventListener('click', function () {
                tarefas.splice(i, 1);
                salvarTarefas();
                criaTarefas();
            });

            li.appendChild(btnRemover);
            listaTarefas.appendChild(li);
        }

        inputTarefas.focus();
    }

    function salvarTarefas() {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
    function carregarTarefas() {
        const tarefasSalvas = localStorage.getItem('tarefas');
        if (tarefasSalvas) {
            tarefas = JSON.parse(tarefasSalvas);
            criaTarefas();
        }
    }

    btnLimpar.addEventListener('click', function () {
        limparTarefas();
    });

    function limparTarefas() {
        localStorage.removeItem('tarefas');
        tarefas = [];
        criaTarefas();
    }

    carregarTarefas();
}

escopoTarefas();
