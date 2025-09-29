function Escopo(){

    // calcular imc

    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');
    const tabela = document.querySelector('#tabela-imc');

    function calcularImc(peso, altura){
        return (peso / (altura * altura)).toFixed(2);
    }

    function classificarImc(imc){
        if(imc < 18.5) return 'Magreza';
        if(imc >= 18.5 && imc < 25) return 'Peso normal';
        if(imc >= 25 && imc < 30) return 'Sobrepeso';
        if(imc >= 30 && imc < 35) return 'Obesidade grau 1';
        if(imc >= 35 && imc < 40) return 'Obesidade grau 2';
        if(imc >= 40) return 'Obesidade grau 3';
    }

    function criarLinhaTabela(imc, classificacao){
        const linha = document.createElement('tr');
        const colunaImc = document.createElement('td');
        const colunaClassificacao = document.createElement('td');   
        colunaImc.textContent = imc;
        colunaClassificacao.textContent = classificacao;
        linha.appendChild(colunaImc);
        linha.appendChild(colunaClassificacao);
        tabela.appendChild(linha);
    }

    function criarParagrafo(){
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid){        
        resultado.innerHTML = '';
        const p = criarParagrafo();

        if(isValid){
            p.classList.add('resultado-imc');
        } else {
            p.classList.add('resultado-imc-invalido');
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const peso = parseFloat(form.peso.value.replace(',', '.'));
        const altura = parseFloat(form.altura.value.replace(',', '.'));        

        // validar peso maximo e minimo de um ser humano
        if (peso < 1 || peso > 595) {
            setResultado('Peso inválido', false);            
            return;
        }

        // validar altura maxima e minima de um ser humano
        if (altura < 0.5 || altura > 2.72) {
            setResultado('Altura inválida', false);            
            return;
        }

        const imc = calcularImc(peso, altura);
        const classificacao = classificarImc(imc);

        const msg = `Seu IMC é ${imc} (${classificacao})`;
        setResultado(msg, true);      

        criarLinhaTabela(imc, classificacao);
    });
}

Escopo();
