// 9: Diseñe la función que devuelve todos los números múltiplos de 3 de un array de enteros.

const multiplos3 = (array) => array.filter((numero) => numero % 3 === 0);
const array = [6, 12, 7, 9, 18, 21, 15, 30];
console.log(multiplos3(array));
