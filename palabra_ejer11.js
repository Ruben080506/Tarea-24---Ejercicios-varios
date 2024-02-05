// 11: Una función recibe como parámetro un array de cadenas de caracteres.
// La función debe devolver el array de aquellos elementos que tienen una sola palabra.
// Ejemplo: ["Juan", "Pedro", "María", "Héctor Pérez", "José de la Cuadra"];
// Resultado esperado: ["Juan", "Pedro", "María"]

const palabra = (array) => array.filter((elemento) => !elemento.includes(" "));
const array = ["Juan", "Pedro", "María", "Héctor Pérez", "José de la Cuadra", "Ruben", "Valentina Carvajal"];
console.log(palabra(array));
