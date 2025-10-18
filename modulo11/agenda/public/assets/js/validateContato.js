(function () {
  'use strict';

  function setValidity(input, message) {
    input.setCustomValidity(message || '');
    if (message) input.reportValidity();
  }

  function validarNome(input) {
    const val = input.value.trim();
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (val.length < 3 || val.length > 50) {
      setValidity(input, 'O nome deve ter entre 3 e 50 caracteres.');
      return false;
    }
    if (!nomeRegex.test(val)) {
      setValidity(input, 'O nome deve conter apenas letras e espaços.');
      return false;
    }
    setValidity(input, '');
    return true;
  }

  function validarSobrenome(input) {
    const val = input.value.trim();
    if (!val) { setValidity(input, ''); return true; }
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!nomeRegex.test(val) || val.length > 50) {
      setValidity(input, 'Sobrenome inválido.');
      return false;
    }
    setValidity(input, '');
    return true;
  }

  function validarEmail(input) {
    const val = input.value.trim();
    if (!val) { setValidity(input, ''); return true; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      setValidity(input, 'Por favor, insira um endereço de e-mail válido.');
      return false;
    }
    setValidity(input, '');
    return true;
  }

  function validarTelefone(input) {
    const val = input.value.replace(/\D/g, '');
    if (!val) { setValidity(input, ''); return true; }
    const telefoneRegex = /^\d{10,11}$/;
    if (!telefoneRegex.test(val)) {
      setValidity(input, 'O telefone deve conter apenas números e ter 10 ou 11 dígitos.');
      return false;
    }
    setValidity(input, '');
    return true;
  }

  function attachToForm(form) {
    if (!form) return;

    const nomeInput = form.querySelector('#nome');
    const sobrenomeInput = form.querySelector('#sobrenome');
    const telefoneInput = form.querySelector('#telefone');
    const emailInput = form.querySelector('#email');

    if (nomeInput) {
      nomeInput.addEventListener('input', () => validarNome(nomeInput));
      nomeInput.addEventListener('blur', () => validarNome(nomeInput));
    }
    if (sobrenomeInput) {
      sobrenomeInput.addEventListener('input', () => validarSobrenome(sobrenomeInput));
      sobrenomeInput.addEventListener('blur', () => validarSobrenome(sobrenomeInput));
    }
    if (emailInput) {
      emailInput.addEventListener('input', () => validarEmail(emailInput));
      emailInput.addEventListener('blur', () => validarEmail(emailInput));
    }
    if (telefoneInput) {
      telefoneInput.addEventListener('input', () => validarTelefone(telefoneInput));
      telefoneInput.addEventListener('blur', () => validarTelefone(telefoneInput));
    }

    form.addEventListener('submit', function (e) {
      let ok = true;
      if (nomeInput) ok = validarNome(nomeInput) && ok;
      if (sobrenomeInput) ok = validarSobrenome(sobrenomeInput) && ok;
      if (emailInput) ok = validarEmail(emailInput) && ok;
      if (telefoneInput) ok = validarTelefone(telefoneInput) && ok;

      if (!ok) {
        e.preventDefault();
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form.contato-form').forEach(form => attachToForm(form));
  });

  window.ContatoValidator = { attachToForm };
}());