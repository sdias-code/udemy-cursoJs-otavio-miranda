const Contato = require('../models/ContatoModel');

// Função auxiliar para extrair mensagens de erro do Mongoose
function getValidationErrors(err) {
  let errors = [];
  if (err.name === 'ValidationError') {
    for (let field in err.errors) {
      errors.push(err.errors[field].message);
    }
  } else {
    errors.push(err.message);
  }
  return errors;
}

// Exibe lista de contatos
exports.index = async (req, res) => {
  try {
    const contatos = await Contato.find().sort({ createdAt: -1 });

    // Sempre envie errors/success para a view
    res.render('contato', {
      contato: {},
      contatos      
    });
  } catch (err) {
    console.error('Erro ao carregar contatos:', err);
    req.flash('errors', 'Erro ao carregar contatos.');
    res.redirect('/contato');
  }
};

// Exibe página de cadastro
exports.cadastro = (req, res) => {
  res.render('contatoAdd', { contato: {} });
  return;
};


// Cria novo contato
exports.contato = async (req, res) => {
  try {

    const { nome, sobrenome, telefone, email } = req.body;
    if (!nome) throw new Error('O nome é obrigatório.');

    await Contato.create({ nome, sobrenome, telefone, email });
    console.log('Contato criado com sucesso!');
    console.log(req.body);

    req.flash('success', 'Contato criado com sucesso!');
    res.redirect('/contato');

  } catch (err) {
    console.error('Erro ao criar contato:', err);

    const errors = getValidationErrors(err);

    // Mantém os dados preenchidos e exibe mensagens
    const contatos = await Contato.find().sort({ createdAt: -1 });
    res.render('contato', { contato: req.body, contatos, errors, success: [] });
  }
};

// Exibe página de edição
exports.editPage = async (req, res) => {
  try {
    const contato = await Contato.findById(req.params.id);
    if (!contato) {
      req.flash('errors', 'Contato não encontrado.');
      return res.redirect('/contato');
    }

    res.render('contatoEdit', { contato });
  } catch (err) {
    console.error('Erro ao carregar contato para edição:', err);
    req.flash('errors', 'Erro ao carregar contato.');
    res.redirect('/contato');
  }
};

// Atualiza contato
exports.update = async (req, res) => {
  try {
    const { nome, sobrenome, telefone, email } = req.body;
    if (!nome) throw new Error('O nome é obrigatório.');

    const contato = await Contato.findByIdAndUpdate(
      req.params.id,
      { nome, sobrenome, telefone, email },
      { new: true, runValidators: true }
    );

    if (!contato) throw new Error('Contato não encontrado.');

    req.flash('success', 'Contato atualizado com sucesso!');
    res.redirect('/contato');

  } catch (err) {

    const errors = getValidationErrors(err);

    // Para manter os dados preenchidos no formulário de edição
    const contato = await Contato.findById(req.params.id);
    res.render('contatoEdit', {
      contato: contato || req.body,
      errors,
      success: []
    });
  }
};

// Deleta contato
exports.delete = async (req, res) => {
  try { 

    const contato = await Contato.findByIdAndDelete(req.params.id);
    if (!contato) throw new Error('Contato não encontrado.');

    req.flash('success', 'Contato excluído com sucesso!');
    res.redirect('/contato');

  } catch (err) {  
    console.error('Erro ao deletar contato:', err);  
    req.flash('errors', getValidationErrors(err));
    res.redirect('/contato');
  }
};
