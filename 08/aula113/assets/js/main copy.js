
function montaTabela(dados) {
    let html = '<table border="1"><thead><tr><th>Nome</th><th>Idade</th><th>Salário</th><th>Email</th></tr></thead><tbody>';
    dados.forEach(pessoa => {
        html += `<tr>
            <td>${pessoa.nome}</td>
            <td>${pessoa.idade}</td>
            <td>${pessoa.salario}</td>
            <td>${pessoa.email}</td>
        </tr>`;
    });
    html += '</tbody></table>';
    document.getElementById('json').innerHTML = html;
}

// Exemplo de uso com fetch:
fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => montaTabela(json));