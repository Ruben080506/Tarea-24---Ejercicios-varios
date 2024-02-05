// 10: Verifique si todos los elementos de la siguiente matriz son positivos:
// const matriz = [ [8, 12, 3, 4 ], [ 40, 34, 6 ], [ 7, 8, 9 ], [ 10, 20, 30, 1 ] ];

const positivos = (matriz) => matriz.every((fila) => fila.every((numero) => numero > 0));
const matriz = [ [8, 12, 3, 4], [40, 34, 6], [7, 8, 9], [10, 20, 30, 1] ];
console.log(positivos(matriz));
