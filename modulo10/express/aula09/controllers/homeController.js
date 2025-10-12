exports.paginaInicial = (req, res) => {
    res.send(`
    <h1>Bem-vindo ao meu site!</h1>
    <p>Este é um site de exemplo usando Express.js.</p>
    <form action="/" method="post">
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
    res.send('Ei, sou sua nova rota de POST.');
}