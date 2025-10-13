// const HomeModel = require('../model/HomeModel');

// HomeModel.create({
//   titulo: 'Um amor de verdade',
//   descricao: 'Filme de romance excelente'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));



exports.paginaInicial = (req, res) => {
  //req.session.usuario = { nome: 'João', logado: true };
  // console.log(req.session.usuario);
  // console.log(req.flash('info'), req.flash('error'), req.flash('success'));
  // req.flash('info', 'Mensagem de flash de informação');
  // req.flash('error', 'Mensagem de flash de erro');
  // req.flash('success', 'Mensagem de flash de sucesso');
  res.render('index');
  return;
}

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;

}