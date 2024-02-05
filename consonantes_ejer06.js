// 6: Diseñe la función que recibe como parámetro una cadena de caracteres, y devuelve la cadena sin consonantes.
// Ejemplo: Hola Universidad
// Resultado esperado: oa Uieia
// Utilizar filter, split

const eConsonantes = (cadena) => cadena.split("").filter((letra) => !"bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(letra)).join("");

console.log(eConsonantes("Hola Universidad"));