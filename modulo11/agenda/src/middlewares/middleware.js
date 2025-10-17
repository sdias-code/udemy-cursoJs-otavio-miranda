exports.middlewareGlobal = (req, res, next) => {   
  res.locals.errors = req.flash('errors') || [];
  res.locals.success = req.flash('success') || [];
  res.locals.user = req.session.user || null;

  if (req.csrfToken) {
    res.locals.csrfToken = req.csrfToken();
  }

  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log('Passei no outro middleware global.');
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404');
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.loginRequired = (req, res, next) => {
  if (!req.session.user) {
    req.flash('errors', 'Você precisa estar logado para acessar esta página.');
    return res.redirect('/login');
  }
  next();
};
