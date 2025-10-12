exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send('Ei, sou sua nova rota de POST.');
}