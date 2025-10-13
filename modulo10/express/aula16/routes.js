const express = require('express');
const router = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'João', sobrenome: 'Silva' };
//     console.log('Passei no middleware!');   
//     next();
// }

// Rotas da home
// router.get('/', meuMiddleware, homeController.paginaInicial), function(req, res, next) {
//     console.log('Ainda estou aqui!');
//     console.log(`'Ultimo middleware:' Olha o que tem na req.session.nome: ${req.session.nome}`);    
// }

router.get('/', homeController.paginaInicial);

router.post('/', homeController.trataPost);

// Rotas de contato
router.get('/contato', contatoController.paginaInicial);
router.post('/contato', contatoController.trataPost);

module.exports = router;