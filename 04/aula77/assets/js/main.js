
function Calculadora() {

    display = document.querySelector('.display');

    this.inicia = () => {
        cliqueBotoes();
        pressionaEnter();
    }

    clearDisplay = () => display.value = '';

    apagaUm = () => display.value = display.value.slice(0, -1);

    pressionaEnter = () => {
        display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13)
                realizaConta();
        })
    }

    realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            display.value = conta;

        } catch (e) {
            alert('Conta inválida');
            return;

        }

    }

    cliqueBotoes = () => {
        document.addEventListener('click', function (e) {
            const el = e.target;

            if (el.classList.contains('btn-num'))
                btnParaDisplay(el.innerText);


            if (el.classList.contains('btn-clear'))
                clearDisplay();

            if (el.classList.contains('btn-del'))
                apagaUm();

            if (el.classList.contains('btn-eq'))
                realizaConta();

        }.bind(this));
    }

    btnParaDisplay = (valor) =>  display.value += valor;    

}

const calculadora = new Calculadora();
calculadora.inicia();