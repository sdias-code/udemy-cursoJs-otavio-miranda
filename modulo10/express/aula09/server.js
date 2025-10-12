const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.json());

app.listen(port, () => {
    console.log('Servidor executando na porta ' + port);
    console.log(`Example app listening at http://localhost:${port}`);
});
