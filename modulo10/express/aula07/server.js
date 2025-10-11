const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/', (req, res) => {
res.send(`
    <h1>Bem-vindo ao meu site!</h1>
    <p>Este é um site de exemplo usando Express.js.</p>
    <form action="/" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
        <br>
        <button type="submit">Enviar formulário</button>
    </form>
`);
});

app.post('/', (req, res) => {
    res.send('Formulário enviado com sucesso!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco. Em breve retornaremos o seu contato.');
});

app.listen(port, () => {
    console.log('Servidor executando na porta ' + port);
    console.log(`Example app listening at http://localhost:${port}`);
});
