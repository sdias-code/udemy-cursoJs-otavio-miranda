const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const registerSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const RegisterModel = mongoose.model('Register', registerSchema);

class Register {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {

        this.valida();
        if (this.errors.length > 0) return;

        await this.userExists();
        if (this.errors.length > 0) return;

        try {
            const salt = bcryptjs.genSaltSync();

            this.body.password = await bcryptjs.hash(this.body.password, salt);

            this.user = await RegisterModel.create(this.body);

        } catch (error) {
            console.log(error);
            this.errors.push('Erro ao cadastrar usuário. Tente novamente mais tarde.');
        }
    }

    valida() {
        this.cleanUp();

        // Email precisa ser válido
        if (!validator.isEmail(this.body.email)) this.errors.push('Email inválido');
        // Senha entre 3 e 50 caracteres
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
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

    async userExists() {
        try {
            this.user = await RegisterModel.findOne({ email: this.body.email });
            if (this.user) this.errors.push('Usuário já existe.');
        } catch (error) {
            this.errors.push('Erro ao verificar usuário. Tente novamente mais tarde.');
            return;
        }
    }
}

module.exports = Register;