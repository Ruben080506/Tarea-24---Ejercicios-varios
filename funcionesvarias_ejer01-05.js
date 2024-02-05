// 1: Realizar una función que imprima el indice del array, el elemento y el array completo.

const array = [10, 2, 45, 8, 9, 6, 11, 22, 33, 29, 15];

array.forEach((elemento, indice, x) => {
  console.log(`El indice del elemento es: ${indice}, el elementos es: ${elemento}, el array completo es: [${x}]`);
});

// 2: Realizar una función que imprima cada palabra de una cadena de caracteres

const frase = (cadena) => {
  cadena.split(" ").forEach((palabra) => {
    console.log(palabra);
  });
};

frase("Bienvenidos a Esmeraldas tierra verde");

// 3: Diseñe la función que ordena un array de cadenas de caracteres
function Ordenar(nombres) {
  return nombres.sort();
}

const nombres = ["Pedro", "Luisa", "Sofia", "Miguel", "Laura", "Diego", "Rueben"];

const Ordenamiento = Ordenar(nombres);
console.log("nombres ordenados de forma ascendente", Ordenamiento);

// 4: Realizar una función que ordene las ciudades de forma descendente un array de cadenas de caracteres.
function OrdenarNDesc(Ciudades) {
  return Ciudades.sort((a, b) => b.localeCompare(a));
}

const Ciudades = ["Piura", "Lima", "Quito", "CUENCA", "Esmeraldas", "Portoviejo", "Santa Elena", "Cali"];

const OrdenDesc = OrdenarNDesc(Ciudades);
console.log("ciudades ordenadas de forma descendente", Ciudades);

// 5: Realice la sumatoria de los elementos de la siguiente matriz:
const temperatuas = [
  [10, 20, 13, 23, 30],
  [8, 15, 10, 18, 19],
  [10, 20, 30],
];

const sumatoria = temperatuas.flat().reduce((acum, valini) => {
  return acum + valini;
}, 0);
console.log("la sumatoria de las temperaturas es", sumatoria);
