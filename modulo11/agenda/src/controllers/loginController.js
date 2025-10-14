const Login = require('../models/LoginModel');

exports.index = (req, res) => { 
  res.render('login');
  return;
}

exports.login = (req, res) => {
  const login = new Login(req.body);
  login.login();

  if(login.errors.length > 0){
    res.send(login.errors);
    req.flash('errors', login.errors);
    req.session.save(() => res.redirect('/login'));
    return;
  }

  res.send(login.body);
  return;
}