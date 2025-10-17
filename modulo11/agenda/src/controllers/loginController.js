const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
  return;
}

exports.login = async (req, res) => {

  try {
    const login = new Login(req.body);
    await login.login();

    // Se houve erros de validação
    if (login.errors.length > 0) {
      console.log(login.errors);
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('/login');
      });
      return;
    }

    // Caso tenha sucesso no cadastro
    req.flash('success', 'Usuário logado com sucesso!');
    console.log('Usuário logado com sucesso!');
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect('/contato');
    });    

  } catch (error) {
    console.log(error);
    res.render('404');
  }

}

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
}
  return;