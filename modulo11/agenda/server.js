const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.CONNECTIONSTRING;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.emit('pronto');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const helmet = require('helmet');
app.use(helmet());

const csrf = require('csurf');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: process.env.SECRETSESSION,
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING,
        collectionName: 'sessions',
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 semana
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');

app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(port, () => {
        console.log('Servidor executando na porta ' + port);
        console.log(`Example app listening at http://localhost:${port}`);
    });
});
