const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const { RegisterModel } = require('./RegisterModel');


class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if (this.errors.length > 0) return;

    // Verifica se o usuário existe
    this.user = await RegisterModel.findOne({ email: this.body.email });
    if (!this.user) {
      this.errors.push('Usuário não encontrado.');
      console.log(this.errors);
      return;
    }

    // Compara senha digitada com a hash armazenada
    const senhaValida = await bcryptjs.compare(this.body.password, this.user.password);
    if (!senhaValida) {
      this.errors.push('Senha inválida.');
      console.log(this.errors);
      this.user = null; // limpa o usuário
      return;
    }

    // Se chegou até aqui, login bem-sucedido
  }

  valida() {
    this.cleanUp();

    if (!validator.isEmail(this.body.email)) {
      this.errors.push('E-mail inválido.');
    }

    if (!this.body.password) {
      this.errors.push('Senha é obrigatória.');
    }
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;
