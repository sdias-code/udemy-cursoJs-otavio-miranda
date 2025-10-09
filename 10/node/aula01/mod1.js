
const nome = 'Silvio';
const sobrenome = 'Dias Ferreira';

const falaNome = () => `Nome: ${nome}, Sobrenome: ${sobrenome}`;

// module.exports.nome = nome; // exportando nome
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
//console.log(module);

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'Uma string com qualquer coisa';

//console.log(module.exports);
//console.log(exports);
