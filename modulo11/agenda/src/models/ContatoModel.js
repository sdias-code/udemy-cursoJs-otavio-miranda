const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: [true, 'O nome é obrigatório.'], 
    trim: true 
  },
  sobrenome: { 
    type: String, 
    trim: true 
  },
  telefone: { 
    type: String, 
    trim: true,
    validate: {
      validator: function(v) {
        if (!v) return true; // permite campo vazio
        return /^\+?\d{7,15}$/.test(v); // aceita números com ou sem +, de 7 a 15 dígitos
      },
      message: 'Telefone inválido. Deve conter apenas números, opcionalmente começando com +.'
    }
  },
  email: { 
    type: String, 
    trim: true, 
    lowercase: true,
    validate: {
      validator: function(v) {
        if (!v) return true; // permite campo vazio
        return /^\S+@\S+\.\S+$/.test(v); // regex simples de e-mail
      },
      message: 'Email inválido.'
    }
  }
}, { timestamps: true });

const Contato = mongoose.model('Contato', ContatoSchema);

module.exports = Contato;
