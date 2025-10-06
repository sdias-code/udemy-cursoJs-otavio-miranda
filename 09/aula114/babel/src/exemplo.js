
// Código moderno ES6+
const saudacao = (nome) => {
  const mensagem = `Olá, ${nome}! Seja bem-vindo(a) ao Babel 😄`;
  return mensagem;
};

const nome = 'Silvio';
const obj = {nome};
const novoObj = {...nome};

console.log(saudacao(nome));