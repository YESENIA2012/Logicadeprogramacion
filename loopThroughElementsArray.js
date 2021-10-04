var vector = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (contador = 0; contador < vector.length; contador++) {
  let filaMatrix = vector[contador];
  console.log("Columnas en la fila:", contador);

  for (contador2 = 0; contador2 < filaMatrix.length; contador2++) {
    var columnaMatrix = filaMatrix[contador2];
    console.log(columnaMatrix);
  }
}
console.log(vector);
