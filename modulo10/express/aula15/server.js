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



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.resolve(__dirname, 'public')));

// const sessionOptions = session({
//     secret: '0452cb0e868b8d0f34e12079ac433037f69488b113b50d3766b6e54333a44cf4',
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
//         httpOnly: true
//     }
// });

const sessionOptions = session({
    secret: '0452cb0e868b8d0f34e12079ac433037f69488b113b50d3766b6e54333a44cf4',
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

const meuMiddleware = require('./src/middlewares/middleware');
app.use(meuMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(port, () => {
        console.log('Servidor executando na porta ' + port);
        console.log(`Example app listening at http://localhost:${port}`);
    });
});
