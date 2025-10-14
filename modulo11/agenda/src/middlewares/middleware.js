
exports.middlewareGlobal = (req, res, next) => {   
    res.locals.umaVariavelLocal = 'Valor da variável local';  
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Passei no outro middleware global.');
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404');
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}