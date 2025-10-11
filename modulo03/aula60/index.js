const num1 = 10;
const num2 = 25;

// function maiorValor(n1, n2) {
//   if(n1 > n2) {
//     return n1;
//   } else {
//     return n2;
//   }
// }

// function maiorValor(n1, n2) {
//   return n1 > n2 ? n1 : n2;
// }

const maiorValor = (n1, n2) => n1 > n2 ? n1 : n2;

console.log(maiorValor(num1, num2));