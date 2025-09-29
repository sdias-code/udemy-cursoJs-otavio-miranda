function meuEscopo() {

    let resultado = document.getElementById('resultado');

    const form = document.getElementById('formulario');

    const pessoas = [];

    function CriarPessoa(nome, sobrenome, peso, altura) {
        return { nome, sobrenome, peso, altura };
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        const pessoa = CriarPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(pessoa);
        console.log(pessoas);

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Seu nome é ${nome.value} ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Seu peso é ${peso.value}kg</p>`;
        resultado.innerHTML += `<p>Sua altura é ${altura.value}m</p>`;

    });

}

meuEscopo();