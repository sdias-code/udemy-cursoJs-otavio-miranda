const HomeModel = require('../model/HomeModel');

// HomeModel.create({
//   titulo: 'Um amor de verdade',
//   descricao: 'Filme de romance excelente'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

HomeModel.find()
  .then(dados => console.log(dados))
  .catch(e => console.log(e));



exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
}

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;

}