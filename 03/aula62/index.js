

const checarNumero = (num) => {

      if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    }

    if(num % 3 === 0){
        return 'Fizz';
    }

    if(num % 5 === 0){
        return 'Buzz';
    } 

    if(num % 3 !== 0 && num % 5 !== 0){
        return num;
    }

    if(Number.isNaN(num)){
        return `Não é um número, ${num}`;
    }  

    }

    console.log(checarNumero('a'));

      for(let i = 0; i <= 100; i++){
        console.log(checarNumero(i));
        
    }