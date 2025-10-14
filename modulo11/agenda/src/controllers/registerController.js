const {Register} = require('../models/RegisterModel'); // classe Register

exports.index = (req, res) => {
  res.render('register');
  return;
}

exports.register = async (req, res) => {
  try {
    const register = new Register(req.body);
    await register.register();

    // Se houve erros de validação
    if (register.errors.length > 0) {
      req.flash('errors', register.errors);
      req.session.save(() => res.redirect('/register'));
      return;
    }

    // Caso tenha sucesso no cadastro
    req.flash('success', 'Usuário cadastrado com sucesso!');
    req.session.save(() => res.redirect('/login'));
    return;

  } catch (error) {
    console.error('Erro no registro:', error);
    req.flash('errors', 'Erro inesperado. Tente novamente mais tarde.');
    req.session.save(() => res.redirect('/register'));
    return;
  }
};