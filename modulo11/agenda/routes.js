const express = require('express');
const route = express.Router();

const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rota principal
route.get('/', (req, res) => {
  if (req.session.user) {
    return res.redirect('/contato');
  }
  return res.redirect('/login');
});

// Rotas de login e registro
route.get('/login', loginController.index);
route.post('/login', loginController.login);
route.get('/logout', loginController.logout);

route.get('/register', registerController.index);
route.post('/register', registerController.register);

// Rotas de contato protegidas por login
route.get('/contato', loginRequired, contatoController.index);
route.get('/contatoAdd', loginRequired, contatoController.cadastro);
route.post('/contato', loginRequired, contatoController.contato);
route.get('/contato/edit/:id', loginRequired, contatoController.editPage);
route.post('/contato/edit/:id', loginRequired, contatoController.update);
//route.get('/contato/delete/:id', loginRequired, contatoController.delete);
route.post('/contato/delete/:id', loginRequired, contatoController.delete);

module.exports = route;
