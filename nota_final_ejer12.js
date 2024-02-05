// 11: Calcular la nota_total y promedio.
const datos = [
  {
    matricula: "001",
    estudiante: "Ponce Miguel",
    materia: "Física",
    notas: [10, 11, 12, 13],
    otras_notas: { examenTeorico: 20, examenPractico: 30 },
  },
  {
    matricula: "002",
    estudiante: "Alava Ana",
    materia: "Física",
    notas: [10, 10, 10, 10],
    otras_notas: { examenTeorico: 20, examenPractico: 30 },
  },
];

const notaFinal = (datos) =>
  datos.map((estudiante) => ({
    estudiante: estudiante.estudiante,
    materia: estudiante.materia,
    nota_total: estudiante.notas.reduce((sum, nota) => sum + nota, 0),
    promedio:
      estudiante.notas.reduce((sum, nota) => sum + nota, 0) /
      estudiante.notas.length,
  }));

console.log(notaFinal(datos));
