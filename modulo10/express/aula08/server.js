const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
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
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Formulário enviado com sucesso!');
});


// para versão 4.x do express
// app.get('/teste/:idUsuarios?', (req, res) => {
//     console.log(req.params);
//     res.send(req.params.idUsuarios);
// }
// );

// para versão 5.x do express
app.get('/teste{/:idUsuarios}{.:ext}{/:login}{.:ext}', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    //res.send(req.params);
    res.send(req.query);

}
);

app.listen(port, () => {
    console.log('Servidor executando na porta ' + port);
    console.log(`Example app listening at http://localhost:${port}`);
});
