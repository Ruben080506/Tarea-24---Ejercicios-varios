// 8: Diseñe la función que determine si todos los elementos de un array de enteros son múltiplo de 5.

const multiplo5 = (array) => array.every((numero) => numero % 5 === 0);
const array = [10, 15, 20, 25, 31];
console.log(multiplo5(array));
