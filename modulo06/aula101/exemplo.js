
const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Antonio'},
    {id: 1, nome: 'Richard'}
];

const novasPessoas = {};
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);