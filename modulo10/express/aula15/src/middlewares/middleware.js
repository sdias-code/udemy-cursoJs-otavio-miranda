module.exports = (req, res, next) => {   
    
    console.log('req.body:', req.body || '(vazio)');
    console.log('Método:', req.method);
    console.log('Passei no middleware global.');

    // Só tenta acessar req.body em requisições que o possuem
    if (req.method === 'POST' && req.body && req.body.cliente) {
        console.log('req.body.cliente existe!');
        console.log('Vi que você postou:', req.body.cliente);
    }

    next();
}

// exports.outroMiddleware = (req, res, next) => {
//     console.log('Passei no outro middleware global.');
//     next();
// }