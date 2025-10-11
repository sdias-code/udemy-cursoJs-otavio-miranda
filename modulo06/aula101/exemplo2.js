const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Antonio'},
    {id: 1, nome: 'Richard'}
];

const novasPessoas = new Map();

for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

// console.log(novasPessoas);
// console.log(novasPessoas.get(2));

for(const pessoa of novasPessoas){
    console.log(pessoa);
}