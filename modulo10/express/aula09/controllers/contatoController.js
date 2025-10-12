
exports.paginaInicial = (req, res) => {
    res.send(`
    <h1>Contato</h1>
    <form action="/contato" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
        <br>
         <label for="nome">Sobrenome:</label>
        <input type="text" id="sobrenome" name="sobrenome" required>
        <br>
        <button type="submit">Enviar formulário</button>
    </form>
`);
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send('Formulário de contato enviado com sucesso!');
}