let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// valores originais
console.log(varA, varB, varC);

[varC, varB, varA] = [varA, varC, varB];

// novos valores
console.log(varA, varB, varC);