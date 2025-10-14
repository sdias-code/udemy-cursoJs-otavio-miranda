const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');

route.get('/', homeController.index, (req, res) => {
  res.render('index');
});

// Rotas de login, cadastro, etc. podem ser adicionadas aqui
route.get('/login', loginController.index, (req, res) => {
  res.render('login');
});

route.post('/login', loginController.login, (req, res) => {
  res.render('login');
});

route.get('/logout', loginController.logout, (req, res) => {
  res.render('login');
});

route.get('/register', registerController.index, (req, res) => {
  res.render('register');
});

route.post('/register', registerController.register, (req, res) => {
  res.render('register');
});


module.exports = route;