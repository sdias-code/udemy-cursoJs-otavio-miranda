
function TratandoErros(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}
try{
    console.log(TratandoErros(1,2));
    console.log(TratandoErros('1',2));
}catch(e){
    console.log('Alguma coisa mais amigável pro usuário.');
    console.log(e);
}