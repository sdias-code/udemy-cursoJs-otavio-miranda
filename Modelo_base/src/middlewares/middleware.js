// exportar como default - exporta como função anônima, não usa destructuring
// exemplo: const meuMiddleware = require('./src/middlewares/middleware');
// module.exports = (req, res, next) => {   
//     console.log('Passei no middleware!');  
//     next();
// }

// exportar como propriedade nomeada
exports.middlewareGlobal = (req, res, next) => {   
    res.locals.umaVariavelLocal = 'Valor da variável local';  
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Passei no outro middleware global.');
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
    next(err);
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}