module.exports = (req, res, next) => {   

    res.locals.umaVariavelLocal = 'Valor da variável local';  

    next();
}

// exports.outroMiddleware = (req, res, next) => {
//     console.log('Passei no outro middleware global.');
//     next();
// }