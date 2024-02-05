// 7: Diseñe la función que recibe como parámetros una cadena de caracteres.
// La función divide la cadena en palabras, y debe devolver un array cuyos elementos serán estas palabras pero ordenadas descendentemente.
// Ejemplo: "Perro Gato León Tigre Iguana Ballena Jaguar Abeja Burro Guepardo Puma"
// Resultado esperado: ["Tigre", "Puma", "Perro", "León", "Jaguar", "Iguana", "Guepardo", "Gato", "Burro", "Ballena", "Abeja"]

const ordenDesc = (cadena) =>
  cadena.split(" ").sort((a, b) => b.localeCompare(a));

const ejemplo =
  "Perro Gato León Tigre Iguana Ballena Jaguar Abeja Burro Guepardo Puma";
console.log(ordenDesc(ejemplo));